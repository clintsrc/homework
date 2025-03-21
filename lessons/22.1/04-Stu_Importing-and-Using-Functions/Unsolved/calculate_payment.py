"""
Bonus:
Q: Look up how to import and use modules from a directory one or more levels
up from the main file.
A: e.g. for ../utils/helper.py
from utils.helper import
"""

"""This program calculates the monthly payment for a car loan."""

# TODO: Import the calculate_monthly_payment function from the car_loan file.
from car_loan import calculate_monthly_payment

# TODO: Prompt the user to enter the price of the car.
price = input("Enter the car's price: ")
# TODO: Convert the price to a floating point number.
if price.isnumeric():
    price = float(price)
else:
    print("Invalid input. Please enter a numeric value for the price.")

# TODO: Prompt the user to enter the annual interest rate.
interest_rate = input("Enter the annual interest rate: ")
# TODO: Convert the interest rate to a floating point number.
if interest_rate.isnumeric():
    interest_rate = float(interest_rate)
else:
    print("Invalid input. Enter an decimal value.")

# TODO: Prompt the user to enter the number of months to pay off the loan.
months = input("Enter the number of months to pay off the loan: ")
# TODO: Convert the number of months to an integer.
if months.isnumeric():
    months = int(months)
else:
    print("Invalid input. Enter an integer.")

# TODO: Call the function and pass the user's input as arguments.
# TODO: Assign the result to a variable.
monthly_payment = calculate_monthly_payment(price, interest_rate, months)

# TODO: Print the monthly payment to two decimal places.
print (f"The car loan's monthly payment is: ${monthly_payment:.2f}")
