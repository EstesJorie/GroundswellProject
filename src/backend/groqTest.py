import os
import groq
from dotenv import load_dotenv


load_dotenv('.env')
APIKEY = os.getenv('GROQ_API_KEY')
client = groq.Client(api_key=APIKEY)

''' DO NOT LET THIS KEY BE EXPOSED THIS IS JUST TO TEST!!! '''
print(f"API Key loaded: {'Key exists' if APIKEY else 'Key not found'}")
print(f"First 10 characters of key: {APIKEY[:10] if APIKEY else 'N/A'}")

def read_file_content(file_path):
    try:
        with open(file_path, 'r') as file:
            return file.read()
    except Exception as e:
        return f"Error: {str(e)}"

def chat_with_groq(prompt, model="llama-3.3-70b-versatile", file_content=None):
    try:
        full_prompt = f"File content:\n{file_content}\n\nUser question: {prompt}" if file_content else prompt
        
        chat_completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant. Analyze any file content provided and answer questions about it."},
                {"role": "user", "content": full_prompt}
            ]
        )
        
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

def main():
    print("Groq Chatbot (type 'exit' to quit)")
    print("Commands:")
    print("- /file [input path]: Load and analyze a file")
    print("- exit: Quit the program")
    print("---------------------------------")
    
    current_file_content = None
    
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Goodbye!")
            break
        
        # Handle file command
        if user_input.startswith("/file "):
            file_path = user_input[6:].strip()
            current_file_content = read_file_content(file_path)
            print(f"\nFile loaded. You can now ask questions about it.")
            continue
        
        response = chat_with_groq(user_input, file_content=current_file_content)
        print(f"\nChatbot: {response}")

if __name__ == "__main__":
    main()