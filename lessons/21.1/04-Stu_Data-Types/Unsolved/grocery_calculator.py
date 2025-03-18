# Write your Python code here
# As a customer, I want to know the total price multiple quantities of the
# same product will cost me, inclusive of sales tax.
def product(item="eggs", price=6.29, tax=6.5, quantity=1):
    """
    Prints a summary of a product including the item, total cost, and quantity.

    Parameters:
    item (str): The name of the item being purchased.
    price (float): The price of the item.
    tax (float): The tax rate for the item.
    quantity (int): The number of items being purchased.
    """

    total = round(price * quantity * (1 + tax / 100), 2)

    print(f"{quantity} {item} will cost ${total:.2f}")


if __name__ == "__main__":
    while True:
        product_name = input("Enter the name of the product you want to purchase: ")
        product_quantity = int( input(
            "How many items of " + product_name + " would you like?: "
        ))
        while not product_quantity.isdigit():
            product_quantity = input("Please enter a valid number. ")

        product_price = float(input("What is the price of " + product_name + "?: "))
        tax_rate = float(input("What is the tax rate?: "))
        product(product_name, product_price, tax_rate, quantity=int(product_quantity))

        # BONUS:
        # Q: Can you add an input question that is converted to a Boolean data 
        # type? If so, what input value would set the variable to `False`?
        
        # continue_purchasing = input("Would you like make another purchase?: " + "(y/n) ")
        # if continue_purchasing.lower() != "y":
        continue_purchasing = (
            input("Would you like make another purchase?: " + "(y/n) ").strip().lower()
        )
        if continue_purchasing not in ["y", "true"]:
            break
