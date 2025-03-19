from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import os
from src.backend.groqTest import chat_with_groq
import uvicorn

app = FastAPI()

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.post("/upload")
async def upload_file(file: UploadFile = File(...)):
    try:
        # Save the uploaded file
        file_path = os.path.join(UPLOAD_FOLDER, file.filename)
        content = await file.read()
        
        # Save the file
        with open(file_path, "wb") as f:
            f.write(content)
        
        # Read the file content as text
        with open(file_path, "r") as f:
            text_content = f.read()
        
        # Process with Groq
        response = chat_with_groq("Analyze this file", file_content=text_content)
        
        return {
            "message": "File uploaded successfully",
            "filename": file.filename,
            "analysis": response
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=5000)