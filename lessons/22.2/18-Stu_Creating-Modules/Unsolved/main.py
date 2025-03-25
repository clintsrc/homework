"""
BONUS
Q: What are the differences between `@staticmethod` and `@classmethod`
    decorators? How are they used compared to instance methods?
A:
@staticmethod:
    Does not take an implicit first argument (like self or cls).
    It behaves like a regular function but belongs to the class's namespace.
    It cannot access or modify the class or instance state.
    Used when the method doesn't need access to the instance or class itself.

@classmethod:
    Takes the class itself as its first argument (cls), not the instance.
    It can access and modify class-level variables and methods.
    Used when the method needs to access or modify class state but not
        instance state.

Compared to instance methods:
    Instance methods take the instance (self) as the first argument and can
        access or modify instance-level attributes.
    @staticmethod and @classmethod are used when the method does not require
        access to the instance itself, but @classmethod needs access to the
        class.
"""

# TODO: Import the SavingsAccount class from the bank_account file.
from bank_account import SavingsAccount

# TODO: Prompt the user to set the starting balance.
starting_balance = float(input("Enter your starting balance: $"))

# TODO: Create an instance of the `SavingsAccount` class
# TODO: Set he users starting balance.
account = SavingsAccount(starting_balance)

# TODO: Prompt the user to deposit their paycheck.
pay = float(input("Enter the amount of your paycheck to deposit: $"))

# Display the amount the user wants to deposit.
print(f"I will deposit ${pay:,.2f} into your account.")

# TODO: Pass the user's pay to the deposit method
# TODO: using the instance of the SavingsAccount class.
account.deposit(pay)

# TODO: Display the balance of the account to two decimal places and thousands.
print(f"Your current balance is ${account.get_balance():,.2f}")

# TODO: Prompt the user to withdraw an amount.
cash = float(input("Enter the amount you want to withdraw: $"))

# Display the amount the user wants to withdraw.
print(f"I will withdraw ${cash:,.2f} from your account.")

# TODO: Pass the user's amount they want to the withdraw method
# TODO: using the instance of the SavingsAccount class.
account.withdraw(cash)

# TODO: Display the balance of the account to two decimal places and thousands.
print(f"Your current balance is ${account.get_balance():,.2f}")
