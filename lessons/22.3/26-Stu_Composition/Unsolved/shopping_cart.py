"""
BONUS
Q: How could you extend the PriceCalculator to handle more complex pricing
    rules or additional item types?
A: Extend the PriceCalculator to handle more complex pricing rules or
    additional item types by introducing strategy patterns or additional
    methods for specific calculations. For example:
    - Pricing Strategies: Implement different pricing strategies as separate
        classes, like PercentageDiscountStrategy or BuyOneGetOneFreeStrategy,
        and pass these strategies to the PriceCalculator.
    - Dynamic Parameters: Add optional parameters for taxes, bulk discounts,
        or seasonal promotions, allowing the calculator to handle diverse
        pricing rules without needing changes to item classes.
    - Item-Specific Logic: Use subclasses of PriceCalculator for each item
        type to encapsulate logic unique to that type while preserving shared
        calculation methods in the base class.
    - Pipeline Approach: Implement a pipeline where different calculation
        steps (e.g., base price, shipping, discounts, taxes) are applied in
        sequence, making the pricing flow more modular and adaptable.

    This separation of concerns makes the system more flexible, easier to
    maintain, and open for extension while adhering to the Open/Closed
    Principle.
"""

from abc import ABC, abstractmethod

# TODO: Create an abstract class called Item.
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

# TODO: Update the PhysicalItem to inherit from the Item class.
class PhysicalItem(Item):
    """
    Represents a physical item with a base price and shipping fee.
    """
    def __init__(self, base_price, shipping_fee):
        self.base_price = base_price
        self.shipping_fee = shipping_fee

    def calculate_total_price(self):
        """
        Calculate the total price of the physical item.
        :return: Total price including shipping fee.
        """
        return self.base_price + self.shipping_fee

# TODO: Update the DigitalItem to inherit from the Item class.
class DigitalItem(Item):
    """
    Represents a digital item with only a base price.
    """
    def __init__(self, base_price):
        self.base_price = base_price

    def calculate_total_price(self):
        """
        Calculate the total price of the digital item.
        :return: Total price without any additional fees.
        """
        return self.base_price

# TODO: Update the GiftCard classes to inherit from the Item class.
class GiftCard(Item):
    """
    Represents a gift card with a base price and discount.
    """
    def __init__(self, base_price, discount):
        self.base_price = base_price
        self.discount = discount

    def calculate_total_price(self):
        """
        Calculate the total price of the gift card after applying the discount.
        :return: Total price after discount.
        """
        return self.base_price - self.discount

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

    # TODO: Add a physical item with a shipping fee to the cart
    cart.add_item(PhysicalItem(100, 10))  # Base price: $100, Shipping fee: $10

    # TODO: Add a digital item with no shipping fee to the cart
    cart.add_item(DigitalItem(50))  # Base price: $50

    # TODO: Add a gift card with a discount to the cart
    cart.add_item(GiftCard(30, 5))  # Base price: $30, Discount: $5

    # Calculate and print the total cost of the cart
    total = cart.calculate_total()
    print(f"Total cost of the cart: ${total}")
