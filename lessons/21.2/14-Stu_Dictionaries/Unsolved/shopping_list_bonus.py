"""
BONUS:
Q: Can you turn the shopping list dictionary into a nested dictionary where 
each key contains a dictionary with the keys "price" and "quantity"? Can you 
add a user input question for the price?
How do you access nested dictionary values?
A: TBD
"""

"""This script represents a shopping list"""

# Define the shopping list collection globally
shopping_list = {}


# Define the add_item function
def add_item(item_name, quantity, price):
    """Add an item to the shopping list""" 

    if item_name in shopping_list:
        shopping_list[item_name]["quantity"] += quantity
        print(f"Updated {item_name} to add {shopping_list[item_name]['quantity']} more.")
    else:
        shopping_list[item_name] = {"price": price, "quantity": quantity}
        print(f"Created new entry for {quantity} {item_name}(s) at ${price:.2f}.")
    show_list()
        
# Define the remove_item function
def remove_item(item_name, quantity):
    """Remove an item from the shopping list"""

    if item_name in shopping_list:
        current_quantity = shopping_list[item_name]["quantity"]
        print(f"Current quantity: {current_quantity}")
        # Don't go negative! delete the item instead of reducing
        if current_quantity <= quantity:
            print(f"Removed {item_name}(s) from the list.")
            del shopping_list[item_name]
        else:
            shopping_list[item_name]["quantity"] -= quantity
            print(f"Removed {quantity} {item_name}(s) from the list.")
        show_list()
    else:
        print(f"No {item_name}(s) were found in the list. No changes were made.")

# Define the show_list function
def show_list():
    """Show the items in the shopping list"""

    print("Shopping List:")
    print("--------------")

    # Check if the shopping list is empty
    if not shopping_list:
        print("The shopping list is empty.")
    else:
        print(shopping_list)


if __name__ == "__main__":
    menu_options = {
        "1": "Add item",
        "2": "Remove item",
        "3": "Show list",
        "4": "Exit"
    }

    print("Welcome to the Shopping List App!")

    while True:
        print("\nPlease select an option:\n"
              "1: Add item\n"
              "2: Remove item\n"
              "3: Show list\n"
              "4: Exit")

        choice = input("Choice: ")
        if choice in menu_options:
            # Check the user's choice
            # 1 - Add item
            if choice == "1":
                item_name = input("Enter the item name to add: ")
                quantity = int(input("Enter the quantity: "))
                price = float(input("Enter the item price: $"))
                
                item_data = {"item_name": item_name, "quantity": quantity, "price": price}

                add_item(**item_data)

            # 2 - Remove item2
            
            elif choice == "2":
                item_name = input("Enter the item name to remove: ")
                quantity = int(input("Enter the quantity to remove: "))

                item_data = {"item_name": item_name, "quantity": quantity}

                remove_item(**item_data)

            # 3 - Show list
            elif choice == "3":
                show_list()
            # 4 - Exit
            elif choice == "4":
                break
        else:
            print("Invalid choice. Please try again.")
