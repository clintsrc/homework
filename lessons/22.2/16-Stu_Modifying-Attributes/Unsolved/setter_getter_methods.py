"""
BONUS
Q: What do the following naming conventions mean and how are they used in
    Python for the following examples?
    A single leading underscore, _radius.
    A single trailing underscore, class_.
    A double leading underscore, __radius.
    A double leading and trailing underscore, __name__,

A:
    Single leading underscore (_radius):
        This is a convention indicating that the attribute or method is
        intended for internal use within a class or module. It’s a weak
        internal use indicator and doesn't prevent external access, but
        signals that the item is not part of the public API.
    Single trailing underscore (class_):
        This is used to avoid conflicts with Python keywords or built-in
        names. For example, class_ is used to avoid conflict with the reserved
        keyword class.
    Double leading underscore (__radius):
        This triggers name mangling, where the name of the attribute is
        altered to include the class name (e.g., _ClassName__radius). This is
        used to avoid accidental name clashes in subclasses and is intended to
        make the attribute private.
    Double leading and trailing underscore (name):
        These are "special" or "magic" methods and attributes in Python, like
        __init__, __str__, and __name__. They are used by Python internally
        and follow a specific naming pattern. Users should generally avoid
        naming their attributes with this pattern to prevent conflicts with
        Python's internal methods.
"""

""""
This class stores the user's account information
and saves it to a JSON file.
"""
import json

class AccountCreation:
    """A class that creates an email and password for a user."""
    def __init__(self,
                 email=None,
                 password=None,
                 first_name=None,
                 last_name=None):
        self.__email = email  # Non-public attributes
        self.__password = password
        self.__first_name = first_name
        self.__last_name = last_name

    @property
    def first_name(self):
        """Gets the first name of the user."""
        return self.__first_name

    @first_name.setter
    def first_name(self, value):
        """Sets the first name of the user."""
        self.__first_name = value

    @property
    def last_name(self):
        """Gets the last name of the user."""
        return self.__last_name

    @last_name.setter
    def last_name(self, value):
        """Sets the last name of the user."""
        self.__last_name = value

    @property
    def email(self):
        """Gets the email of the user."""
        return self.__email

    @email.setter
    def email(self, value):
        """Sets the email of the user if it is in the correct format."""
        if "@" not in value or "." not in value:
            raise ValueError("That is an invalid email format.")
        self.__email = value

    @property
    def password(self):
        """Gets the password of the user."""
        return self.__password

    @password.setter
    def password(self, value):
        """
        Sets the password of the user if it is at least 8 characters long.
        """
        if len(value) < 8:
            raise ValueError("The password must be at least 8 characters long")
        self.__password = value

    def save_account(self, filename):
        """Saves the account information to a JSON file."""
        data = {
            'first_name': self.first_name,
            'last_name': self.last_name,
            'email': self.email,
            'password': self.password
        }
        with open(filename, 'w', encoding='utf-8') as json_file:
            json.dump(data, json_file, indent=4)

if __name__ == "__main__":
    # Create an instance of the AccountCreation class.
    account_info = AccountCreation()

    # Ask the user to enter their first name.
    user_first_name = input("Enter your first name: ")
    # Set the first name using the setter method
    account_info.first_name = user_first_name

    # Ask the user to enter their last name.
    user_last_name = input("Enter your last name: ")
    # Set the last name using the setter method
    account_info.last_name = user_last_name

    while True:
        # Ask the user to enter an email address.
        user_email = input("Enter your email address: ")
        # Set the email using the setter method
        try:
            account_info.email = user_email
            break
        except ValueError as e:
            print(e)

    while True:
        print("Create a password that is at least 8 characters long.")
        # Ask the user to enter a password.
        user_pwd = input("Enter your password: ")
        # Set the password using the setter method
        try:
            account_info.password = user_pwd
            break
        except ValueError as e:
            print(e)

    # Save the account information to a JSON file
    account_info.save_account('account_info.json')

    # Print the confirmation message.
    print("Check your email for confirmation.")