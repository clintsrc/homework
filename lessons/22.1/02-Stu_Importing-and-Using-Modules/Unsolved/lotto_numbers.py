"""
BONUS:
Q: Look up how to use other random functions
A:
random.choice(seq): This function returns a randomly selected element from a non-empty sequence (like a list or a tuple). For example:

import random
items = ['apple', 'banana', 'cherry']
selected_item = random.choice(items)
print(selected_item)
random.random(): This function returns a random floating-point number between 0.0 and 1.0. For example:

import random
random_number = random.random()
print(random_number)
random.uniform(a, b): This function returns a random floating-point number between the two specified values a and b. For example:

import random
random_float = random.uniform(1.5, 10.5)
print(random_float)
random.randrange(start, stop[, step]): This function returns a randomly selected element from the range created by the specified start, stop, and step parameters. For example:

import random
random_integer = random.randrange(1, 10, 2)  # Random odd number between 1 and 9
print(random_integer)
random.sample(population, k): This function returns a list of k unique elements chosen from the specified population sequence or set. For example:

import random
population = ['a', 'b', 'c', 'd', 'e']
sample_items = random.sample(population, 3)  # Get 3 unique items
print(sample_items)
"""

"""This program generates random lottery numbers."""
# TODO: Import the randint function from the random module.
from random import randint

def generate_lottery_numbers(value):
    """This function generates four random numbers between
    1 and 64 and prints them to the screen"""
    # TODO: Create an empty list to store the lottery numbers
    lottery_numbers = []

    # TODO: Use a for loop to generate 5 numbers.
    for _ in range(value):
        # TODO: Assign a variable to the randint() function
        # TODO: and pass the range of numbers between 1 and 64.
        number = randint(1, 64)
        # TODO: Append the number to the list.
        lottery_numbers.append(number)
    # TODO: Return the list of lottery numbers.
    return lottery_numbers


# Call the function to generate lottery numbers
if __name__ == "__main__":
    # Assign the return value of the function to a variable.
    # Pass a number to  the function to generate random lottery numbers.
    my_numbers = generate_lottery_numbers(5)
    # Print the list of lottery numbers.
    print(f"Lottery numbers: {my_numbers}")
