# Insert comments to explain which output will be printed for each conditional

# 1. oooo needs some work
x = 5
if 2 * x > 10:
    print("Question 1 works!")
else:
    print("oooo needs some work")

# 2. Question 2 works!
x = 5
if len("Dog") < x:
    print("Question 2 works!")
else:
    print("Still missing out")

# 3. GOT QUESTION 3!   # 8 >= 5
x = 2
y = 5
if x ** 3 >= y:
    print("GOT QUESTION 3!")
else:
    print("This one didn't work")

# 4. Madagascar is in Africa
country = "Madagascar"
if country == "Madagascar":
    print(f"{country} is in Africa")
else:
    print(f"{country} is not in Africa")

# 5. You're going places!
going_places = True
if going_places:
    print("You're going places!")
else:
    print("You prefer to stay at home.")

# 6. 66,000 cannot be converted to a number
altitude = "66,000"
if altitude.isdigit():
    print(f"The plane flew at {altitude} feet")
else:
    print(f"{altitude} cannot be converted to a number")

# 7. Australia is not in Southeast Asia.
destination = "Australia"
sea_countries = ["Thailand", "Philippines", "Cambodia", "Malaysia",
                 "Singapore", "Laos", "Myanmar", "Vietnam", "Brunei",
                 "East Timor", "Indonesia"]

if destination in sea_countries:
    print(f"{destination} is in Southeast Asia.")
else:
    print(f"{destination} is not in Southeast Asia.")

# 8. The tax rate is a float.
tax_rate = 10.75
if isinstance(tax_rate, int):
    print("The tax rate is an integer.")
elif isinstance(tax_rate, float):
    print("The tax rate is a float.")
else:
    print("The tax rate is not a number.")

# 9. The price is less than 4 or is a float.    # or statement
price = 5.99
if price > 4 and isinstance(price, int):
    print("The price is greater than 4 and is an integer.")
elif price < 4 or isinstance(price, float):
    print("The price is less than 4 or is a float.")
elif price >= 5 and not isinstance(price, int):
    print("The price is greater than or equal to 5 and is not an integer.")
else:
    print("None of the conditions were met.")

# 10. You chose rock!
choice = "r"

if choice.lower() == "q":
    print("Thanks for playing!")
elif choice.lower() == "r":
    print("You chose rock!")
elif choice.lower() == "p":
    print("You chose paper!")
elif choice.lower() == "s":
    print("You chose scissors!")
else:
    print("I don't understand your choice.")

# BONUS:
# Q: Can you convert the final problem into a match case statement? Match 
#   case is Python's equivalent of a switch case statement.
choice = "P"

match choice.lower():
    case 'q':
        print("Thanks for playing!")
    case 'r':
        print("You chose rock!")
    case 'p':
        print("You chose paper!")
    case 's':
        print("You chose scissors!")
    case _: # all other values (default)
        print("I don't understand your choice.")
