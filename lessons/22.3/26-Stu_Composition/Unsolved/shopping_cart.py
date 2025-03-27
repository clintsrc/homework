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

class PriceCalculator:
    """
    A class responsible for calculating the price of an item.
    """

    def __init__(self, base_price, shipping_fee=0, discount=0):
        """
        Initialize the price calculator with a base price,
        shipping fee, and discount.

        :param base_price: The base price of the item.
        :param shipping_fee: The shipping fee for the item, default is 0.
        :param discount: The discount applied to the item, default is 0.
        """
        self.base_price = base_price
        self.shipping_fee = shipping_fee
        self.discount = discount

    def calculate_total_price(self):
        """
        Calculate the total price of the item after applying the shipping
        fee and discount.

        :return: The total price of the item.
        """
        return self.base_price + self.shipping_fee - self.discount


# TODO: Create a PhysicalItem class that contains a PriceCalculator instance.
class PhysicalItem:
    """
    Represents a physical item in the cart.
    """

    def __init__(self, price_calculator):
        """
        Initialize the physical item with a PriceCalculator instance.

        :param price_calculator: The PriceCalculator instance for this item.
        """
        self.price_calculator = price_calculator

    def calculate_total_price(self):
        """
        Calculate the total price using the PriceCalculator.

        :return: The total price of the physical item.
        """
        return self.price_calculator.calculate_total_price()


# TODO: Create a DigitalItem class that contains a PriceCalculator instance.
class DigitalItem:
    """
    Represents a digital item in the cart.
    """

    def __init__(self, price_calculator):
        """
        Initialize the digital item with a PriceCalculator instance.

        :param price_calculator: The PriceCalculator instance for this item.
        """
        self.price_calculator = price_calculator

    def calculate_total_price(self):
        """
        Calculate the total price using the PriceCalculator.

        :return: The total price of the digital item.
        """
        return self.price_calculator.calculate_total_price()


# TODO: Create a GiftCard class that contains a PriceCalculator instance.
class GiftCard:
    """
    Represents a gift card in the cart.
    """

    def __init__(self, price_calculator):
        """
        Initialize the gift card with a PriceCalculator instance.

        :param price_calculator: The PriceCalculator instance for this item.
        """
        self.price_calculator = price_calculator

    def calculate_total_price(self):
        """
        Calculate the total price using the PriceCalculator.

        :return: The total price of the gift card.
        """
        return self.price_calculator.calculate_total_price()


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
    laptop_price_calculator = PriceCalculator(1000, 50)
    laptop = PhysicalItem(laptop_price_calculator)
    cart.add_item(laptop)

    # Add a digital item with no shipping fee
    ebook_price_calculator = PriceCalculator(20)
    ebook = DigitalItem(ebook_price_calculator)
    cart.add_item(ebook)

    # Add a gift card with a discount
    gift_card_price_calculator = PriceCalculator(100, discount=10)
    gift_card = GiftCard(gift_card_price_calculator)
    cart.add_item(gift_card)

    # Calculate and print the total cost of the cart
    total = cart.calculate_total()
    print(f"Total cost of the cart: ${total}")
