"""This script contains functions that perform calculations related to loans.
"""


# TODO: Define the calculate_loan_balance function
# TODO: Use the following default values for the function parameters:
# TODO: monthly_payment=0, annual_interest_rate=5.99, years=1
def calculate_loan_balance(principal, monthly_payment=0, annual_interest_rate=5.99, years=1):
    """Calculate the balance of a loan after a given number of years.

    Parameters:
    principal (float): The initial loan amount.
    monthly_payment (float): The monthly payment
    annual_interest_rate (float): The annual interest rate.
    years (int): The number of years.

    Returns:
    float: The balance of the loan after a given number of years.
    """

    # Loop through the years
    for year in range(years):
        # Loop through the months
        for month in range(12):
            # Calculate the balance of the loan
            principal = (principal * (1 + annual_interest_rate / 100 / 12)
                         - monthly_payment)

            # Check if the balance of the loan is negative
            if principal <= 0:
                # TODO: If the balance of the loan is negative, return 0
                return 0

    # TODO: Return the balance of the loan after a given number of years
    # TODO: Round the balance to two decimal places
    return round(principal, 2)

########### BONUS
# Can you write an additional function, or modify the calculate loan function, 
# so that it only uses optional parameters?
def calculate_loan_balanceKWARGS(principal, **kwargs):
    """Calculate the balance of a loan after a given number of years using optional parameters.

    Parameters:
    principal (float): The initial loan amount.
    kwargs (dict): Optional keyword arguments that can include:
                  - monthly_payment (float): The monthly payment (default is 0).
                  - annual_interest_rate (float): The annual interest rate (default is 5.99).
                  - years (int): The number of years (default is 1).

    Returns:
    float: The balance of the loan after a given number of years.
    """
    # Set default values if they are not provided
    monthly_payment = kwargs.get('monthly_payment', 0)
    annual_interest_rate = kwargs.get('annual_interest_rate', 5.99)
    years = kwargs.get('years', 1)

    # Loop through the years
    for year in range(years):
        # Loop through the months
        for month in range(12):
            # Calculate the balance of the loan
            principal = (principal * (1 + annual_interest_rate / 100 / 12)
                         - monthly_payment)

            # Check if the balance of the loan is negative
            if principal <= 0:
                return 0

    return round(principal, 2)



# Define the main function
if __name__ == "__main__":
    # Get the loan details from the user
    principal = float(input("Enter the loan amount: "))
    monthly_payment = float(input("Enter the monthly payment: "))

    # TODO: Calculate the balance of the loan using the default values
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable
    balance = calculate_loan_balance(principal, monthly_payment)

    # Print the balance of the loan
    print(f"The balance of the loan after one year is ${balance}")

    print("Calculate the balance of the loan after a different number of "
          + "years.")

    # Get the number of years from the user
    years = int(input("Enter the number of years: "))

    # TODO: Calculate the balance of the loan using years as a keyword argument
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable
    balance = calculate_loan_balance(principal, monthly_payment, years=years)

    # Print the balance of the loan
    print(f"The balance of the loan after {years} years is ${balance}")

    print("The default interest rate is 5.99%."
          "Calculate the balance of the loan with a different interest rate.")

    # Get the number of years from the user
    interest = float(input("Enter the interest rate: "))

    # TODO: Calculate the balance of the loan using interest as a positional argument
    # TODO: Send the user input values for principal, monthly_payment, and interest to the function
    # TODO: Store the result in the balance variable
    balance = calculate_loan_balance(principal, monthly_payment, annual_interest_rate=interest)

    # Print the balance of the loan
    print(f"The balance of the loan with an interest rate of {interest}% "
          + f"after one year is ${balance}")

    # TODO: Calculate the balance of the loan using all of the used inputs as positional arguments
    # TODO: Send the user input values to the function
    # TODO: Store the result in the balance variable
    balance = calculate_loan_balance(principal, monthly_payment, annual_interest_rate=interest, years=years)

    # Print the balance of the loan
    print(f"The balance of the loan with an interest rate of {interest}% "
          + f"after {years} years is ${balance}")


########### BONUS
print("\n\n\nBONUS function")
balance = calculate_loan_balanceKWARGS(10000, monthly_payment=500, annual_interest_rate=6, years=5)
print(f"Loan balance after 5 years: ${balance}")

# Using only the required parameter (principal)
balance = calculate_loan_balanceKWARGS(10000)
print(f"Loan balance with default values: ${balance}")


#### BONUS
# Q: What is the LEGB rule for identifying an object by name? How are global 
#     scale and built-in objects defined?
# A: The LEGB rule stands for Local, Enclosing, Global, and Built-in. It 
#     describes the order that Python looks for an object variable when 
#     referenced by name
#
# Local: First, Python looks in the local scope (inside the current function 
#     or method).
# Enclosing: If the object isn't found in the local scope, Python looks in 
#     any enclosing function scopes (e.g., if the function is nested inside 
#     another function).
# Global: If Python doesn't find the object in the local or enclosing scopes, 
#     it will look in the global scope (the module-level scope or the 
#     top-level of the program).
# Built-in: If Python can't find the object in the local, enclosing, or global 
#     scopes, it will finally check the built-in scope (this includes 
#     functions like print(), len(), etc.).
#