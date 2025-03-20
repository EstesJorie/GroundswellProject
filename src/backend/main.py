from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from pathlib import Path
import os
import sys

load_dotenv()

# Set up backend directory path
backend_dir = Path(__file__).parent
if str(backend_dir) not in sys.path:
    sys.path.append(str(backend_dir))

from groqTest import chat_with_groq

app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "Welcome to the file analysis API"}

@app.post("/upload")
async def upload_file(
    file: UploadFile = File(...),
    text: str = Form(...),  # Required form field
    model: int = Form(...),
    description: str = Form(None)  # Optional form field
):
    try:
        contents = await file.read()
        content_str = contents.decode('utf-8')
        
        # Combine text and description for the prompt
        prompt = f"{text}. Description: {description if description else text}" 
        print(type(prompt))
        
        # Call chat_with_groq with model parameter
        response = chat_with_groq(
            prompt, 
            model_num=model, 
            file_content=content_str
        )
        
        return {
            "message": "File processed successfully",
            "filename": file.filename,
            "content_type": file.content_type,
            "model": model,
            "analysis": response
        }
    except Exception as e:
        return {"error": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)