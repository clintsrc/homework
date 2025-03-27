"""
BONUS
Q: How could you refactor the code to use multiple abstract base classes to
    handle more complex scenarios?
A: By using multiple abstract base classes for added layers of abstraction
    to handle different item characteristics. For instance:
    - Item Base Class: Keep the existing Item abstract base class to enforce
        the calculate_total_price() method across all items.
    - Shippable Interface: Create an abstract base class like Shippable that
        requires a method calculate_shipping() for items that involve shipping
        fees. PhysicalItem would implement this interface.
    - Discountable Interface: Similarly, add a Discountable abstract base
        class requiring a calculate_discount() method for items with
        discounts, like GiftCard.
"""

from abc import ABC, abstractmethod

# TODO: Create an abstract class called Item.

# TODO: Update the PhysicalItem to inherit from the Item class.
class Item(ABC):
    """
    Abstract base class for items in the shopping cart.
    """
    @abstractmethod
    def calculate_total_price(self):
        """
        Calculate the total price of the item.
        """
        pass

class PhysicalItem(Item):
    """
    Represents a physical item that includes a shipping fee.
    """

    def __init__(self, name, price, shipping_fee):
        """
        Initialize the physical item with a name, price, and shipping fee.

        :param name: The name of the item.
        :param price: The base price of the item.
        :param shipping_fee: The shipping fee for the item.
        """
        self.name = name
        self.price = price
        self.shipping_fee = shipping_fee

    def calculate_total_price(self):
        """
        Calculate the total price including the shipping fee.

        :return: The total price including shipping.
        """
        return self.price + self.shipping_fee


# TODO: Update the DigitalItem to inherit from the Item class.
class DigitalItem(Item):
    """
    Represents a digital item that has no shipping fee.
    """

    def __init__(self, name, price):
        """
        Initialize the digital item with a name and price.

        :param name: The name of the item.
        :param price: The base price of the item.
        """
        self.name = name
        self.price = price

    def calculate_total_price(self):
        """
        Calculate the total price for the digital item.

        :return: The base price, since there is no shipping fee.
        """
        return self.price


# TODO: Update the GiftCard classes to inherit from the Item class.
class GiftCard(Item):
    """
    Represents a gift card that applies a discount to the price.
    """

    def __init__(self, name, price, discount):
        """
        Initialize the gift card with a name, price, and discount.

        :param name: The name of the item.
        :param price: The base price of the item.
        :param discount: The discount applied to the gift card.
        """
        self.name = name
        self.price = price
        self.discount = discount

    def calculate_total_price(self):
        """
        Calculate the total price after applying the discount.

        :return: The price after the discount is applied.
        """
        return self.price - self.discount


class ShoppingCart:
    """
    Represents a shopping cart that holds multiple items.
    """

    def __init__(self):
        """Initialize an empty shopping cart."""
        self.items = []

    def add_item(self, item):
        """
        Add an item to the shopping cart.

        :param item: The item to be added to the cart.
        """
        self.items.append(item)

    def calculate_total(self):
        """
        Calculate the total cost of all items in the cart.

        :return: The total cost of all items.
        """
        return sum(item.calculate_total_price() for item in self.items)


# Test the ShoppingCart with different items
if __name__ == "__main__":
    cart = ShoppingCart()

    # Add a physical item with a shipping fee
    cart.add_item(PhysicalItem("Laptop", 1000, 50))

    # Add a digital item with no shipping fee
    cart.add_item(DigitalItem("E-Book", 20))

    # Add a gift card with a discount
    cart.add_item(GiftCard("Gift Card", 100, 10))

    # Calculate and print the total cost of the cart
    total = cart.calculate_total()
    print(f"Total cost of the cart: ${total}")
