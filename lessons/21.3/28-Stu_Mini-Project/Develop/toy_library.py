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
        "replacement_cost": 24.75
    },
    {
        "toy": "Forbidden Island",
        "type": "Board Game",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 19.99
    },
    {
        "toy": "LEGO Minecraft The Axolotl House",
        "type": "Building Set",
        "status": "Available",
        "checkout_date": "",
        "due_date": "",
        "checkout_count": 0,
        "replacement_cost": 29.99
    },
    {
        "toy": "Best Toy Ever",
        "type": "Electronic",
        "status": "Checked Out",
        "checkout_date": "2025-03-18",
        "due_date": "2025-04-18",
        "checkout_count": 1,
        "replacement_cost": 29.99
    }
]

# TODO: Define the checkout function
def checkout_toy():
    print("checkout_toy - TODO")
#    Call print_library(optional status="Available")
#         prints available items
#    Updates an item in the toy_library: 
#         if available
#             status == "Checked Out,"
#             update checkout_date and due_date values
#             return True
#         if "Checked Out":
#             (Do not update the toy)
#             return False

# TODO: Define the return_toy function
def return_toy():
    print("return_toy - TODO")
    # Call the print_library(optional status="Checked Out")
    #     print checked out items
    # if checked_out
    #     Change the status to "Available," updates the values of checkout_date and due_date to empty strings, and returns True. 
    # if status=="Available"
    #     (Do not update)
    #     return False

# TODO: Define the add_toy function
def add_toy():
    print("add_toy - TODO")
# add_toy(name, toy_type="", status="Available", replacement_cost=0.0):
#     Add a new toy

# TODO: Define the remove_toy function
def remove_toy(index):
    # pop returns the item that was removed
    removed = toy_library.pop(index)
    print(f"Removing Toy {removed}")
    return [removed]

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
        # Add 1 to the index output to make the display friendlier
        print(f"{index + 1}. {toy['toy']}: {toy['status']}")
        # Show detail on (optional) view_details parameter
        if view_details:
            print(f"\tType: {toy['type']}")
            print(f"\tCheckout Count: {toy['checkout_count']}")
            print(f"\tReplacement Cost: {toy['replacement_cost']}")
            # Checkout info
            if "checked out" == toy['status'].lower():
                print(f"\t** Checkout Date: {toy['checkout_date']} **")
                print(f"\t** Due Date: {toy['due_date']} **")

            
# ##### View Library #####
# ##### View DETAILED Library #####
    # print_library(view_details=True)
    #     for each item (all items) in the toy_library print:
    #         index
    #         toy name
    #         status
    #         if view_details:
    #             toy type
    #             checkout count
    #             and replacement cost
    #             if status == "Checked Out":
    #                 checked out date
    #                 return date    

# TODO: Define a function to check if the user input is in the toy library
# called when a user types in a value to represent an index in the toy_library
def check_if_index_in_library():
    print("check_if_index_in_library - TODO")
    # if input can be integer
    # then
    #     convert input to integer
    #     if input is a valid index, len(toy_library)
    #         return input as an integer
    #     else
    #         return None

# Define the main function
# TODO:
# MAIN
# * Pressing "Enter" at the first prompt returns to the main menu instead of 
# selecting an option
# * Provide an option to return to the main menu from each of these options:
# checkout_toy
# return_toy
# add_toy
# remove_toy
if __name__ == "__main__":

    library_menu = {
        "1": "Checkout a Toy",  # TODO
        "2": "Return a Toy",  # TODO
        "3": "View Toy Library",  # TODO
        "4": "View Detailed Toy Library",  # TODO
        "5": "Add a Toy",  # TODO
        "6": "Remove a Toy",  # TODO
        "7": "Exit"
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
            print("TODO")

            if choice == '1':
                checkout_toy()
            elif choice == '2':
                return_toy()
            elif choice == '3':
                # Show all items (summary)
                print_library()
            elif choice == '4':
                # Show all items, include details
                print_library(view_details=True)
            elif choice == '5':
                add_toy()
            elif choice == '6':
                print_library()
                index = input("Enter the toy to remove (\"Enter\" for Main menu): ")
                if "" == index:
                    continue
                remove_toy(0)   # todo
                print_library() # show the updated catalog
            elif choice == '7':
                 # Exit the program
                break
        else:
            print(f"Invalid choice: {choice}. Please try again.")