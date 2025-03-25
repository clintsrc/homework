"""
BONUS
Q: What other read and write modes are available for the with open()
statement? When would we use these modes?
A:
'r'	Read mode (file must exist).
    Reading an existing file
'w'	Write mode (overwrites file).
    Writing new data, overwriting existing file
'a'	Append mode (creates file if it doesn't exist).
    Adding new data to the end of an existing file
'x'	Exclusive creation (raises error if file exists).
    Creating a new file without overwriting
'b'	Binary mode (combined with 'r', 'w', etc.).
    Reading/writing binary files (images, audio)
't'	Text mode (default)	Working with text files
'r+' Read and write mode (file must exist).
    Reading and modifying an existing file
'w+' Write and read mode (file is overwritten).
    Overwriting and reading from a file
'a+' Append and read mode (file is created if not exists).
    Reading and appending to an existing file
"""


""" This program adds new data to the book sales data.
and then reads the data from the file and prints it to the console."""

# TODO: Import the functions from the CSV_handler module.
# Import the Path module from the pathlib library.
from pathlib import Path
from csv_handler import append_to_csv, read_csv

# Get the current script's directory
current_directory = Path(__file__).parent

# Navigate to the 'Resources' directory from the current directory
file_out_path = current_directory / "Resources" / "book_sales.csv"

# TODO: Create a user prompts to add new data to the book_sales.csv file.
# TODO: The book title is a string.
book_title = input("Enter the book title: ")

# TODO: The author is a string.
author = input("Enter the author: ")

# TODO: The quantity is an integer.
while True:
    try:
        quantity = int(input("Enter the quantity: "))
        break
    except ValueError:
        print("Please enter a valid integer for quantity.")

# TODO: The price is a float.
while True:
    try:
        price = float(input("Enter the price: "))
        break
    except ValueError:
        print("Please enter a valid float for price.")

# TODO: Add the new book data to list.
new_book_data = [book_title, author, quantity, price]

# TODO: Call the function and pass the file path and the new book data.
append_to_csv(file_out_path, new_book_data)

# TODO: Call the read function to see if the new data has been added properly.
print("Updated book sales data:")
for row in read_csv(file_out_path):
    print(row)
