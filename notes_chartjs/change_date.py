import pandas as pd

csv_file = "dow_last.csv"

# Read the CSV file into a DataFrame
df = pd.read_csv(csv_file, header=0, names=['symbol', 'date', 'close'])

# Modify the date column to the desired format
df['date'] = pd.to_datetime(df['date']).dt.strftime('%m/%d')

# Save the modified DataFrame to a new CSV file
df.to_csv('dow_last_updated.csv', index=False)
