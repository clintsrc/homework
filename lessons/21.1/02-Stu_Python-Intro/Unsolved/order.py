"""This Python script simulates a food ordering system."""


# The following block of code is an example of a function in Python.
# TODO: Describe the function in your own words
#
# order()
# Order is a user-defined function that calculates the price of a food order 
#   by the number of items.
# It includes the tax charge in the total.
# It prints the total to the console
#
# It requires these parameters:
# (the parameters are named parameters so that they don't have to be provided
#  in the calling function in any order, and any of them can be omitted from
#  the call)
# food: the name of the item as a string. The default value is pizza
# price: the base cost of each item as a float. The default price for pizza is 5.99
# tax: the tax rate as a float. The default tax rate is 6.5
# quantity: quantity of the item ordered as an int. The default value is 1
def order(food="pizza", price=5.99, tax=6.5, quantity=1):
    """
    Prints a summary of an order including the dish, total cost, and quantity.

    Parameters:
    food (str): The name of the food being ordered.
    price (float): The price of the food.
    tax (float): The tax rate for the order.
    quantity (int): The number of meals being ordered.
    """

    # TODO: Describe the purpose of the following line of code
    # Convert the tax rate to a percentage
    # Multipy the price by the quantity by the tax percentage
    # Round the total to the nearest hundredths place and return the total
    total = round(price * quantity * (1 + tax / 100), 2)

    # TODO: Describe the purpose of the following line of code
    # Prints the number of items, the name of the item and the total to the
    # console. It uses a string that is formatted inline using string
    # interpolation to substitute those values directly in the string.
    print(f"{quantity} order(s) of {food} will cost ${total}")


# TODO: Describe the purpose of the following line of code
# __main__ is the script's entrypoint (like the traditional main() in C and 
# other languages). If the name of the current module is __main__ then run the
# remaining code. Main is implicit name of the script's global scope
if __name__ == "__main__":
    # TODO: Describe the purpose of the following line of code
    # define a dictionary object. Dictionary object have key/value pairs
    order_options = {
        "pizza": 5.99,
        "pasta": 6.99,
        "salad": 5.49,
        "soup": 3.99
    }

    # TODO: Describe the purpose of the following line of code
    # start an infinite loop - this is used when the end is unknown. We don't
    # know when the user wants to stop, but that condition happens later
    # with a break statement
    while True:
        # TODO: Describe the purpose of the following line of code
        # input() takes user input from the console. The first parameter is
        # a string written to the console to prompt the user for input.
        # The menu food selection from the order_options dictionary object
        # are appended to the prompt to provide the available food selection.
        # The user types the answer which is stored in the meals variable
        meal = input("What would you like to order?\n"
                     + "Choose from the following options: "
                     + ", ".join(order_options.keys()) + " ")

        # TODO: Describe the purpose of the following line of code
        # ensure that the key name the user entered at the prompt is recognized,
        # meaning that it matches one of the key names in the order_options 
        # dictionary
        if meal in order_options:
            # TODO: Describe the purpose of the following line of code
            # return the value of the key that matches the meal string value.
            # The value of the dictionary's food item (a float value 
            # representing the food item's price)
            # is stored in a price variable
            price = order_options[meal]

            # TODO: Describe the purpose of the following line of code
            # similar to the food prompt, this input asks the user a 
            # quantity of the food item they want, then stores that input
            # value in a quantity variable
            quantity = input("How many orders of " + meal
                             + " would you like? ")

            # TODO: Describe the purpose of the following line of code
            # This continues to prompt the user for a numeric value, a single
            # digit, until they provide one (reject strings, decimals, etc)
            # Once valid digit is detected the while condition is met and the
            # next statement after the while block executes
            while not quantity.isdigit():
                # TODO: Describe the purpose of the following line of code
                # prompt the user for a valid number to indicate whatt
                # value is required. Store the input value in the quantity
                # variable. Inside a while statement this line is guaranteed
                # to execute at least once
                quantity = input("Please enter a valid number. ")

            # TODO: Describe the purpose of the following line of code
            # Call the order function defined above with the values that were
            # determined by the user input. The quantity is cast to an integer
            # before it is passed in to ensure we pass the function an int and
            # not a string value
            order(meal, price, quantity=int(quantity))
        # TODO: Describe the purpose of the following line of code
        # The else block here provides an option for the user to place another
        # order (after a successful order or after an input answer error).
        # More importantly it specifies the condition to exit from the infinite
        # outer while loop to end the program.
        else:
            # TODO: Describe the purpose of the following line of code
            # the user entered a key name at the prompt that isn't recognized
            # Print a message to indicate the problem
            print("Invalid order. Try again.")
            # TODO: Describe the purpose of the following line of code
            # the continue keyword skips the remaining code and jumps to the
            # first line inside the outer while condition to prompt the user
            # for their order again
            continue

        # TODO: Describe the purpose of the following line of code
        # if there was no order input error prompt the user for a 'y'es or
        # 'n'o keystroke and store that value in the continue_ordering variable
        continue_ordering = input("Would you like to order another dish? "
                                  + "(y/n) ")

        # TODO: Describe the purpose of the following line of code
        # determine if the user entered anything other than 'y' ('n' or any 
        # other character)
        if continue_ordering.lower() != "y":
            # TODO: Describe the purpose of the following line of code
            # this instruction jumps out of the outermost while statement to
            # break out of the infinite loop and end the program.
            break
