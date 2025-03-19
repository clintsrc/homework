"""This script represents a toy library"""

# Use the standard library for the checkout timestamps
import datetime

# Define the toy library collection globally
toy_library = [
    {
        "toy": "Barbie Extra Fashion Doll with Afro-Puffs",
        "type": "Doll",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 24.75,
    },
    {
        "toy": "Forbidden Island",
        "type": "Board Game",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 19.99,
    },
    {
        "toy": "LEGO Minecraft The Axolotl House",
        "type": "Building Set",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 29.99,
    },
    {
        "toy": "Best Toy Ever",
        "type": "Electronic",
        "status": "Checked Out",
        "checkout_date": "2025-03-18",
        "due_date": "2025-04-18",
        "checkout_count": 1,
        "replacement_cost": 29.99,
    },
]


# TODO: Define the checkout function
def checkout_toy():
    print_library(status="Available")

    checkout_input = input("Enter a toy to checkout ([Enter] to return to the main menu): ").strip()
    if not checkout_input:
        print("Cancelled")
    else:
        index = check_if_index_in_library(checkout_input)
        if index is not None:
            if "available" == toy_library[index]["status"].lower():
                toy_library[index]["status"] = "Checked Out"

                # Checked out today %Y-%m-%d would be 20255-
                toy_library[index]["checkout_date"] = datetime.datetime.now().strftime("%Y-%m-%d")
                # calculate 2 weeks from now
                due_date = datetime.datetime.now() + datetime.timedelta(weeks=2)
                # set the calculated due date
                toy_library[index]["due_date"] = due_date.strftime("%Y-%m-%d")
                # bump the number of times it's been checked out
                toy_library[index]["checkout_count"] += 1
                # Update feedback
                print_library()
                return True
            else:
                # Already Checked Out
                return False
        else:
            print(f"Invalid input: {checkout_input}")

# TODO: Define the return_toy function
def return_toy():
    print_library(status="Checked Out")

    checkin_input = input("Enter a toy to return ([Enter] to return to the main menu): ").strip()
    if not checkin_input:
        print("Cancelled")
    else:
        index = check_if_index_in_library(checkin_input)
        if index is not None:
            if "checked out" == toy_library[index]["status"].lower():
                toy_library[index]["status"] = "Available"
                # clear the dates
                toy_library[index]["checkout_date"] = ""
                toy_library[index]["due_date"] = ""
                # Update feedback
                print_library()
                return True
            # Already Available
            return False
        else:
            print(f"Invalid input: {checkout_input}")

# TODO: Define the add_toy function
def add_toy(toy_name, toy_type="", status="Available", replacement_cost=0.0):
    toy_data = {
        "toy": toy_name,
        "type": toy_type,
        "status": status,
        "checkout_count": 0,
        "replacement_cost": replacement_cost
    }
    toy_library.append(toy_data)
    print(f"Added the new Toy {toy_name}")

# TODO: Define the remove_toy function
def remove_toy():
    print_library()

    remove_input = input("Enter a toy to remove ([Enter] to return to the main menu): ").strip()
    if not remove_input:
        print("Cancelled")
    else:
        index = check_if_index_in_library(remove_input)
        if index is not None:
            # pop returns the item that was removed
            removed = toy_library.pop(index)
            # Update feedback
            print_library()
            return [removed]
        else:
            print(f"Invalid input {remove_input}")

# TODO: Define the print library function
def print_library(status=None, view_details=False):
    print("==== Toy Library ====")

    # filter items by (optional) status parameter
    if status:
        # listcomp iterates through toys to add items with a  given
        # status (e.g. available) to populate a filtered list
        filtered_toys = [toy for toy in toy_library if toy["status"] == status]
    else:
        # None means the 'filtered' list is actually all items and not really
        # filtered at all
        filtered_toys = toy_library

    for index, toy in enumerate(filtered_toys):
        print(f"{index}. {toy['toy']}: {toy['status']}")
        # Show detail on (optional) view_details parameter
        if view_details:
            print(f"\tType: {toy['type']}")
            print(f"\tCheckout Count: {toy['checkout_count']}")
            print(f"\tReplacement Cost: {toy['replacement_cost']}")
            # Checkout info
            if "checked out" == toy["status"].lower():
                print(f"\t** Checkout Date: {toy['checkout_date']} **")
                print(f"\t** Due Date: {toy['due_date']} **")

# BONUS
def update_toy():
    """Update an existing toy."""

    print_library()

    update_input = input("Enter the toy to update ([Enter] to return to the main menu): ").strip()
    if not update_input:
        print("Cancelled")
    else:
        index = check_if_index_in_library(update_input)

        if index is not None:
            toy = toy_library[index]
            print(f"Updating toy: {toy['toy']}")

            new_name = input(f"Name ([Enter] to keep '{toy['toy']}'): ")
            if new_name:
                toy['toy'] = new_name

            new_type = input(f"Type ([Enter] to keep '{toy['type']}'): ")
            if new_type:
                toy['type'] = new_type

            # Limit the status to Available or Checked Out
            new_status = input(f"Status (Available/Checked Out) ([Enter] to keep '{toy['status']}'): ")
            if new_status:
                new_status = new_status.lower()
                if new_status in ['available', 'checked out']:
                    toy['status'] = new_status.title()
            # Available status needs to have cleared dates
            if "available" == toy['status'].lower():
                toy['checkout_date'] = ""
                toy['due_date'] = ""

            new_cost = input(f"Replacement cost ([Enter] to keep '{toy['replacement_cost']}'): ")
            if new_cost:
                try:
                    toy['replacement_cost'] = float(new_cost)
                except ValueError:
                    print("Invalid cost. No changes made.")

            print(f"Updated toy: {toy['toy']}")

            # Update feedback
            print_library()
        else:
            print(f"Invalid input: {update_input}")


# TODO: Define a function to check if the user input is in the toy library
# called when a user types in a value to represent an index in the toy_library
def check_if_index_in_library(input_item):
    if input_item.isdigit():  # Check input for digit
        input_item = int(input_item)  # Convert to integer
        if 0 <= input_item < len(toy_library):  # Ensure index is within list's range
            return input_item  # Return a valid index
    return None

# Define the main function
if __name__ == "__main__":

    library_menu = {
        "1": "Checkout a Toy",
        "2": "Return a Toy",
        "3": "View Toy Library",
        "4": "View Detailed Toy Library",
        "5": "Add a Toy",
        "6": "Remove a Toy",
        "7": "Update a Toy",
        "8": "Exit",
    }

    # Print the library menu
    print("Welcome to the Toy Library!")

    # TODO: Implement the main menu loop
    while True:
        # Print the menu options
        print("\nPlease select an option:")
        for key, value in library_menu.items():
            print(f"Option {key}: {value}")

        # Get the user's choice
        choice = input("Choice: ")

        if choice in library_menu:
            if choice == "1":
                checkout_toy()
            elif choice == "2":
                return_toy()
            elif choice == "3":
                # Update feedback
                print_library()
            elif choice == "4":
                # Show all items, include details
                print_library(view_details=True)
            elif choice == "5":
                toy_name = input("Enter Toy name: ")
                toy_type = input("Enter Toy type ([Enter] to skip): ")
                replacement_cost = input("Enter Toy's price value ([Enter] to skip): 0.00")
                try:
                    replacement_cost = float(replacement_cost) if replacement_cost else 0.00
                except ValueError:
                    print("Invalid price. Setting to $0.0.")
                    replacement_cost = 0.0
                # Create the dictionary with the correct keys
                new_toy = {
                    "toy_name": toy_name,
                    "toy_type": toy_type,
                    "replacement_cost": replacement_cost,
                }

                # Call add_toy with dictionary unpacking
                # Using dictionary unpacking (silly in this case, but it
                # meets the spec)
                add_toy(**new_toy)
                # Update feedback
                print_library()
            elif choice == "6":
                removed = remove_toy()
                if removed is not None:
                    print(f"Removed Toy {removed}")
            elif choice == "7":
                update_toy()
            elif choice == "8":
                # Exit the program
                break
        else:
            print(f"Invalid choice. Please try again.")
