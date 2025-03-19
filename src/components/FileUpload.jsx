import React, { useState } from 'react';

const FileUpload = ({setFile, file}) => {
  const [response, setResponse] = useState('');
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:8000/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setResponse(data.analysis);
    } catch (error) {
      setResponse('Error uploading file: ' + error.message);
    }
  };

  const handleChat = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      const response = await fetch('http://localhost:8000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message }),
      });
      
      const data = await response.json();
      setChatHistory(prev => [...prev, 
        { role: 'user', content: message },
        { role: 'assistant', content: data.response }
      ]);
      setMessage('');
    } catch (error) {
      setResponse('Error: ' + error.message);
    }
  };

  return (
    <>
      <div className="upload-container">
        <input id="file" type="file" onChange={handleFileChange} />
      </div>
      {file && (
        <section>
          <p>Selected file: {file.name}</p>
        </section>
      )}

      {file && (
        <button 
          onClick={handleUpload}
          className="submit"
        >
          Analyze with Groq
        </button>
      )}
      
      {response && (
        <div className="analysis-response">
          <h3>Analysis Result:</h3>
          <p>{response}</p>
        </div>
      )}
      
      <div className="chat-container">
        <div className="chat-history">
          {chatHistory.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <strong>{msg.role === 'user' ? 'You' : 'AI'}:</strong>
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
        
        <form onSubmit={handleChat} className="chat-input">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
};

export default FileUpload;