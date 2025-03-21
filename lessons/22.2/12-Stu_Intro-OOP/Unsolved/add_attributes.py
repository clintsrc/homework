"""
BONUS
Q: What are the differences between public and private class methods? When
    would you use these types of methods?
A:
Differences:
    Access: Public is open to all, private is restricted to the class.
    Purpose: Public methods expose functionality, private methods handle
        internal logic.
When to Use:
    Public methods: To interact with the object externally.
    Private methods: For internal operations that should not be accessed
        directly.
"""

# Define the Car class with five parameters
class Car:
    """Creating a Car class with five parameters and instances"""

    # TODO: Create the __init__ method with five parameters
    def __init__(self, make, model, body, year, color):
        """
        Initializes a new instance of the Car class with attributes.

        Args:
        - make (str): The make of the car.
        - model (str): The model of the car.
        - body (str): The body type of the car.
        - year (int): The year of the car.
        - color (str): The color of the car.
        """
        # TODO: Initialize the five attributes
        self.make = make
        self.model = model
        self.body = body
        self.year = year
        self.color = color

    def __str__(self):
        """Return a string representation of the car's details."""
        return (f"Car Make: {self.make}\n"
                f"Model: {self.model}\n"
                f"Body: {self.body}\n"
                f"Year: {self.year}\n"
                f"Color: {self.color}")

# Main function
if __name__ == "__main__":
    # TODO: Create prompts for the user to enter the car information.
    make = input("Enter the make of the car: ")
    model = input("Enter the model of the car: ")
    body = input("Enter the body type of the car (e.g., sedan, SUV): ")
    year = int(input("Enter the year of the car: "))  # Ensure year is an integer
    color = input("Enter the color of the car: ")

    # TODO: Pass user information to the instance of the Car class.
    car = Car(make, model, body, year, color)

    print('Here is the information you entered for the car.')
    # TODO: Print the details of the car.
    print(car)
