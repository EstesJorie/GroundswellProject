from dotenv import load_dotenv
import os

load_dotenv('.env')
APIKEY = os.getenv('GROQ_API_KEY')

''' DO NOT LET THIS KEY BE EXPOSED THIS IS JUST TO TEST!!! '''
print(f"API Key loaded: {'Key exists' if APIKEY else 'Key not found'}")
print(f"First 10 characters of key: {APIKEY[:10] if APIKEY else 'N/A'}")