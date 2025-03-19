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
    
models = {
    1: "gemma2-9b-it",
    2: "llama-3.3-70b-versatile",
    3: "llama-3.1-8b-instant",
    4: "llama-guard-3-8b",
    5: "llama3-70b-8192",
    6: "llama3-8b-8192",
    7: "mixtral-8x7b-32768",
    8: "deepseek-r1-distill-qwen-32b",
    9: "deepseek-r1-distill-llama-70b-specdec",
    10: "deepseek-r1-distill-llama-70b",
}

def print_models():
    print("Available models:")
    for key, value in models.items():
        print(f"{key}: {value}")
    
    while True:
        try:
            selection = input("\nSelect model number (or press Enter to cancel): ").strip()
            if not selection:  # User pressed Enter without input
                return None
            
            model_num = int(selection)
            if model_num in models:
                return model_num
            else:
                print(f"Invalid model number. Please choose between 1 and {len(models)}")
        except ValueError:
            print("Please enter a valid number")

def chat_with_groq(prompt, model_num=1, file_content=None):
    try:
        # Convert model_num to int if it's a string
        model_num = int(model_num)
        
        # Validate model number and get model name
        if model_num not in models:
            print(f"Invalid model number {model_num}, using default model (1)")
            model_num = 1
        
        selected_model = models[model_num]
        print(f"Using model #{model_num}: {selected_model}")
        
        full_prompt = f"File content:\n{file_content}\n\nUser question: {prompt}" if file_content else prompt
        
        chat_completion = client.chat.completions.create(
            model=selected_model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant. Analyze any file content provided and answer questions about it."},
                {"role": "user", "content": full_prompt}
            ]
        )
        
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

def main():
    print("---------------------------------")
    print("Groq Chatbot (type 'exit' to quit)")
    print("Commands:")
    print("- /file [input path]: Load and analyze a file")
    print("- /model: Show available models")
    print("- exit: Quit the program")
    print("---------------------------------")

    current_file_content = None
    current_model = 1 # Default model
    
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Goodbye!")
            break

        if user_input == "/model":
            selected_model = print_models()
            if selected_model:
                current_model = selected_model
                print(f"Model changed to: {models[current_model]} (model #{current_model})")
            continue
        
        # Handle file command
        if user_input.startswith("/file "):
            file_path = user_input[6:].strip()
            current_file_content = read_file_content(file_path)
            print(f"\nFile loaded. You can now ask questions about it.")
            continue

        if user_input.startswith("/help"):
            print("---------------------------------")
            print("Groq Chatbot (type 'exit' to quit)")
            print("Commands:")
            print("- /file [input path]: Load and analyze a file")
            print("- /model: Show available models")
            print("- exit: Quit the program")
            print("---------------------------------")
            continue
        
        response = chat_with_groq(user_input, current_model, file_content=current_file_content)
        print(f"\nChatbot: {response}")

if __name__ == "__main__":
    main()