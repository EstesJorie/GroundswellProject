import os
import groq
from dotenv import load_dotenv


load_dotenv('.env')
APIKEY = os.getenv('GROQ_API_KEY')
client = groq.Client(api_key=APIKEY)

''' DO NOT LET THIS KEY BE EXPOSED THIS IS JUST TO TEST!!! '''
print(f"API Key loaded: {'Key exists' if APIKEY else 'Key not found'}")
print(f"First 10 characters of key: {APIKEY[:10] if APIKEY else 'N/A'}")

def chat_with_groq(prompt, model="llama3-70b-8192"):
    """
    Send a prompt to Groq and get a response.
    
    Args:
        prompt (str): The user's message
        model (str): The model to use (default: llama3-70b-8192)
    
    Returns:
        str: The AI's response
    """
    try:
        chat_completion = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": "You are a helpful assistant."},
                {"role": "user", "content": prompt}
            ]
        )
        
        # Extract and return the response
        return chat_completion.choices[0].message.content
    except Exception as e:
        return f"Error: {str(e)}"

def main():
    print("Groq Chatbot (type 'exit' to quit)")
    print("---------------------------------")
    
    while True:
        user_input = input("\nYou: ")
        if user_input.lower() in ["exit", "quit", "bye"]:
            print("Goodbye!")
            break
        
        response = chat_with_groq(user_input)
        print(f"\nChatbot: {response}")

if __name__ == "__main__":
    main()