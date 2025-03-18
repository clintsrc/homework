"""
BONUS:
Q:
* Can you convert the menu from if/elif to match case?
  (See below)
* Are there other string methods that weren't explicitly demonstrated that could be useful?
A: Here are a few:
split() — Instead of manually parsing the input string, split(",") would cleanly separate multiple names.
join() — Could be handy if you ever want to recombine names into a single string, though not strictly needed here.
casefold() — Similar to lower() but more aggressive with handling case-insensitive matching across languages.
"""

"""This script demonstrates how to create a user management system"""

users = {}


def create_user(names):
    """Create a new user"""
    # Convert the names to title case and split the names by comma
    names_list = [name.strip().title() for name in names.split(',')]

    # Add the users to the dictionary
    for name in names_list:
        # The name should be the dictionary key
        # The value should be the name in lower case with spaces replaced by
        # underscores
        users[name] = name.lower().replace(" ", "_")

    print("User(s) added successfully.")


def remove_user(name):
    """Remove a user"""
    # Convert the name to title case and strip any leading or trailing
    # whitespace
    name = name.strip().title()

    # Check if the user exists in the dictionary
    if name in users:
        # Remove the user
        del users[name]
        print(f"{name} removed successfully.")
    else:
        print(f"{name} not found.")


def view_users():
    """View all users"""
    # Check if there are users in the dictionary
    if users:
        # Print the users
        for key, value in users.items():
            print(f"{key}: {value}")
    else:
        print("No users found.")


if __name__ == "__main__":
    # Create a dictionary of menu options
    menu = {
        1: "Add one or more new users",
        2: "Remove a user",
        3: "View all users",
        4: "Exit"
    }

    while True:
        # Print the menu options
        print("\nPlease select an option:")
        for key, value in menu.items():
            print(f"Option {key}: {value}")

        # Get the user's choice
        choice = input("Choice: ")

        # Check if the user's choice can be converted to an integer
        if not choice.isdigit():
            print("Invalid choice. Please try again.")
            continue

        choice = int(choice)

        # Check if the user's choice is in the menu
        match choice:
            # Check the user's choice
            # 1 - Create a new user
            case 1:
                print("To enter multiple users, separate the values with a comma.")
                # Get the user's input for the new user
                names = input("Enter the name(s): ")

                # names should be alphabet characters, commas, and spaces
                if not all(char.isalpha() or char.isspace() or char == ',' for char in names):
                    print("Invalid name(s). Please try again.")
                    continue

                # Create a new user
                create_user(names)
            # 2 - Remove a user
            case 2:
                print("If you don't know the user's name, view all users first.\nType 'view' to view all users.")
                # Get the user's input for the user to remove
                name = input("Enter the name of the user to remove: ")

                # Check if the user wants to view all users
                if name.lower() == "view":
                    view_users()

                    # Get the user's input for the user to remove
                    name = input("Enter the name of the user to remove: ")

                # Remove a user
                remove_user(name)
            # 3 - View all users
            case 3:
                # View all users
                view_users()
            # 4 - Exit
            case 4:
                # Exit the program
                break
            case _:
            	print("Invalid choice. Please try again.")
