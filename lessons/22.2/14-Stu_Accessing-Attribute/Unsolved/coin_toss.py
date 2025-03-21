"""
BONUS
Q: What does the @property decorator do in Python classes, and
    how does it help with encapsulating class attributes?
    Look up information online to understand its purpose and how it can be
    used to create read-only attributes in a class.
A:
Read-Only Attributes:
    You can create a method that behaves like an attribute but only allows
        reading its value, making it read-only. This is useful when you want
        to protect an attribute from being modified directly while still
        providing access to it.
Getter Methods:
    You can use it on a method to allow it to be accessed like an attribute.
        This eliminates the need for an explicit getter method.
Encapsulation:
    The decorator is part of encapsulation. Internal class data can be
        protected and accessed only through well-defined methods.
Setter Method (Optional):
    You can use @<property_name>.setter to define a setter method. This
        allows controlled modification of the attribute.

Benefits:
    Improves readability: Provides clear, intuitive access to data as though
        it were a simple attribute.
    Prevents direct modification: With a getter, you can ensure that the
        attribute is not modified inappropriately.
"""

""" This program simulates a coin toss. """
import sys
from random import randint


class CoinToss:
    """A class representing a coin toss.
    Attributes:
      side_up (str): The current side of the coin facing up.
    """
    def __init__(self):
        # TODO: Initialize the side up attribute to `None`.
        self.side_up = None

    # TODO: Create a `toss` method that simulates a coin toss.
    def toss(self):
        """
        Simulates a coin toss by randomly setting the side up
        attribute to either 'Heads' or 'Tails'.
        """
        # TODO: Use the randint function to set the side up attribute.
        result = randint(0, 1)
        # TODO: If the number is 0 set the side up to 'Heads'
        if result == 0:
            self.side_up = 'Heads'
        # TODO: Else set the side up to 'Tails'.
        else:
            self.side_up = 'Tails'

    # TODO: Add a method to get the side of the coin.
    # TODO: The method should return the current side of the coin facing up.
    def get_side(self):
        return self.side_up


if __name__ == "__main__":
    # Create an instance of the CoinToss class.
    my_coin = CoinToss()

    # Ask the user which side of the coin to choose.
    user_choice = input("Choose a side of the coin: " +
                        "Heads or Tails: ").capitalize()

    # Ensure the user input is valid.
    if user_choice not in ["Heads", "Tails"]:
        print("Invalid choice. Please choose 'Heads' or 'Tails'.")
        sys.exit()

    # Toss the coin.
    print("I am tossing the coin...")
    # TODO: Call the toss method on the my_coin instance.
    my_coin.toss()

    # TODO: Display the side of the coin that is facing up.
    print(f"The coin landed on: {my_coin.get_side()}")

    # Determine who starts based on the coin toss result.
    # TODO: Check if the side up attribute is equal to the user choice.
    if my_coin.get_side() == user_choice:
        # TODO: Print "You start first!" if the condition is met.
        print("You start first!")
    else:
        # TODO: Else print "Your opponent starts first."
        print("Your opponent starts first.")
