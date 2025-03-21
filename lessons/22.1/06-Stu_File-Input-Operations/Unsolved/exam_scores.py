"""
BONUS
Q: Look up how to read files using file = open(file_path, 'r', encoding='utf-8').
Why do you need to use the close() method to close the file when opening files
in this manner?
A:
Resource Management: Each open file consumes system resources
    (like file descriptors). If you open many files without closing them,
    you may exhaust the available resources, leading to errors.
Data Integrity: When writing to a file, data may not be immediately written
    to disk. Instead, it might be buffered in memory. Closing the file ensures
    that all buffered data is flushed to the disk, preventing data loss.
Avoiding Corruption: If a file remains open and your program crashes or
    exits unexpectedly, it may leave the file in an inconsistent state.
    Closing the file properly ensures that it is safely written and closed.
Preventing Memory Leaks: Keeping files open unnecessarily can lead to memory
    leaks in your application, as each open file object consumes memory.
"""

"""This program reads a CSV file and calculates
the average score for a given subject."""
# TODO: Import the csv module
# TODO: Import the Path module from the pathlib library
import csv
from pathlib import Path
# TODO: Get the current script's directory.
current_dir = Path(__file__).parent
# TODO: Set the path to the current directory
# TODO: and, the 'Resources' directory, and the 'exam_scores.csv' file.
csv_file_path = current_dir / "Resources" / "exam_scores.csv"


def get_averages(file_path):
    """
    Reads a CSV file containing student exam scores
    and calculates the average score for each subject.

    Args:
        file_path (str): The file path to the CSV file.

    Returns:
        None

    Prints:
        The class average score for each subject.
    """
    # Initialize a dictionary to store the scores for each subject.
    # The subjects are: Composition, Biology, Math, and Speech.
    subject_scores = {
        "Composition": [],
        "Biology": [],
        "Math": [],
        "Speech": []
    }

    # TODO: Open the CSV file, using the read mode and encoding='utf-8'.
    with open(file_path, mode='r', encoding='utf-8') as csvfile:
        # TODO: Create a CSV reader object using the DictReader() class.
        csvreader = csv.DictReader(csvfile)
        # TODO: Iterate over each row in the CSV file
        for row in csvreader:
            # TODO: Iterate over each subject.
            for subject in subject_scores.keys():
                # TODO: Extract the subject score and
                # TODO: add it to the subject list as an integer.
                subject_scores[subject].append(int(row[subject]))

    # TODO: Iterate over the subject_scores dictionary.
    for subject, scores in subject_scores.items():
        # TODO: Calculate the average score for each subject
        average_score = sum(scores) / len(scores)
        # TODO: Print the average score for each subject.
        print(f"The average score for {subject} is {average_score:.2f}")

if __name__ == "__main__":
    # TODO: Define the path to the CSV file
    file_path = csv_file_path

    # TODO: Call the function with the file path.
    get_averages(file_path)
