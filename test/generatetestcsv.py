import pandas as pd
import random
from pathlib import Path

# Create a sample dataset with British spelling
data = {
    'Name': ['Alice', 'Bob', 'Charlie', 'David', 'Eva', 'Frank', 'Grace', 'Hannah', 'Ivy', 'Jack'],
    'Age': [random.randint(18, 60) for _ in range(10)],
    'City': ['London', 'Manchester', 'Birmingham', 'Liverpool', 'Edinburgh', 'Glasgow', 'Leeds', 'Cardiff', 'Bristol', 'Sheffield'],
    'Occupation': ['Engineer', 'Teacher', 'Artist', 'Doctor', 'Nurse', 'Chef', 'Writer', 'Designer', 'Scientist', 'Manager'],
    'Salary': [random.randint(35000, 120000) for _ in range(10)],
    'Favourite Colour': ['Red', 'Blue', 'Green', 'Yellow', 'Pink', 'Purple', 'Orange', 'Brown', 'Black', 'White'],
    'Organisation': ['Private', 'Public', 'Private', 'Public', 'Private', 'Private', 'Public', 'Public', 'Private', 'Public']
}

# Create a DataFrame
df = pd.DataFrame(data)

# Set up the output directory and file path
output_dir = Path(__file__).parent / 'data'
output_file = output_dir / 'random_data_british.csv'

try:
    # Create the output directory if it doesn't exist
    output_dir.mkdir(parents=True, exist_ok=True)
    
    # Save to CSV with full path
    df.to_csv(output_file, index=False)
    print(f"CSV file saved successfully at: {output_file}")
except Exception as e:
    print(f"Error saving CSV file: {e}")