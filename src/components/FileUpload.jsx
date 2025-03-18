import React, { useState } from 'react';

const FileUpload = ({setFile, file}) => {
  const [response, setResponse] = useState('');

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('http://localhost:5000/upload', {
        method: 'POST',
        body: formData,
      });
      
      const data = await response.json();
      setResponse(data.analysis);
    } catch (error) {
      setResponse('Error uploading file: ' + error.message);
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
    </>
  );
};

export default FileUpload;