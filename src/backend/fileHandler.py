from flask import Flask, request
from flask_cors import CORS
import os
from src.backend.groqTest import chat_with_groq

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return {'error': 'No file part'}, 400
    
    file = request.files['file']
    if file.filename == '':
        return {'error': 'No selected file'}, 400

    file_path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(file_path)
    
    # Read the file content
    with open(file_path, 'r') as f:
        content = f.read()
    
    # Process with Groq
    response = chat_with_groq("Analyze this file", file_content=content)
    
    return {'message': 'File uploaded successfully', 'analysis': response}

if __name__ == '__main__':
    app.run(port=5000)
