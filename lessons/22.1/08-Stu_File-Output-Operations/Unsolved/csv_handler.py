import csv

# TODO: Create a function that appends data to the end of the book sales data.
def append_to_csv(file, book_data):
    """Create a CSV file and write the header row and data to it.

    Args:
    file (str): The path to the CSV file.
    book_data (list): The data rows to be written to the CSV file.
    """
    # TODO: Use the with open statement to create a new CSV file.
    # TODO: Use utf-8 encoding to ensure the data is written correctly.
    with open(file, mode='a', encoding='utf-8', newline='') as csvfile:
        # TODO: Create a CSV writer object using the writer() function.
        writer = csv.writer(csvfile)
        # TODO: Write the new data to the file.
        writer.writerow(book_data)  # Use writerow to append a single row


# TODO: Create a function that reads the book sales data and prints it to the console.
def read_csv(file):
    """
    Reads a CSV file and prints contents of the CSV file.
    Args:
      file (str): The path to the CSV file to read.

    Returns:
      list: The file contents by row.
    """
    # TODO: Open the CSV file using the csv module
    # TODO: Use the read mode and encoding='utf-8'.
    rows = []
    with open(file, mode='r', encoding='utf-8') as csvfile:
        # TODO: Create a CSV reader object with the reader() function.
        reader = csv.reader(csvfile)
        # TODO: Iterate over each row in the CSV file
        for row in reader:
            # TODO: Print each row from the file.
            rows.append(row)
    return rows  # Return the rows for further processing
