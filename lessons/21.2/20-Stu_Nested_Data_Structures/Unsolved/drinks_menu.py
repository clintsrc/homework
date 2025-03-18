"""
BONUS:
Q: What Python dictionary methods haven't been covered in class? Are there 
    any additional ones you could see yourself using?
A: 
    dict.get(key, default=None): Returns the value for the specified key. If the key doesn't exist, returns default.
    dict.update(other_dict): Updates the dictionary with key-value pairs from other_dict (or from keyword arguments).
    dict.sedict.pop(key, default=None): Removes the key and returns its value. If the key doesn't exist, returns default.
    dict.popitem(): Removes and returns the last inserted key-value pair as a tuple (in Python 3.7+).
    del dict[key]: Deletes a key-value pair by key (raises KeyError if the key is missing).
    dict.clear(): Removes all items from the dictionary.
    dict.copy(): Returns a shallow copy of the dictionary.
    dict == other_dict: Compares two dictionaries for equality.
    dict.fromkeys(iterable, value=None): Creates a new dictionary from the given iterable, with each item as a key and value as the default value.
"""

"""This script prints a drinks menu"""


def display_drinks_menu(drinks_menu):
    """
    This function accepts a drinks menu nested dictionary in the format
    { "Drink name": { "Option": Price} }
    Then prints out a formatted version of the drinks menu
    """
    # TODO: Loop through the drinks menu dictionary
    for drink, options in drinks_menu.items():
        # TODO: Print the drink name
        print(drink)
        # TODO: Loop through the drink options
        for option, price in options.items():
            # TODO: Print the option and price
            # TODO: Use the format "  {option}: ${price}"
            print(f"  {option}: ${price}")

if __name__ == "__main__":
    # Create a drinks menu dictionary
    drinks = {
        "Soda": {
            "Small": 1.99,
            "Medium": 2.49,
            "Large": 2.99
        },
        "Tea": {
            "Green": 2.49,
            "Thai iced": 3.99,
            "Irish breakfast": 2.49
        },
        "Coffee": {
            "Espresso": 2.99,
            "Flat white": 2.99,
            "Iced": 3.49
        }
    }

    display_drinks_menu(drinks)
