"""
BONUS:
Q: What do the following list methods do and how do you use them: 
    .index(), .extend(), .insert(), .reverse(), and .sort()?
A: 
"""


"""This script demonstrates the use of list methods and functions"""

# Define the hobbies and feb_temperatures lists
hobbies = ["windsurfing", "bowling", "mini golf", "stand-up comedy",
           "knitting", "acrobatics", "cross-stitch"]

feb_temperatures = [28, 32, 27, 34, 35, 33, 28, 28, 27, 25, 29, 30, 30, 27, 27,
                    30, 27, 26, 27, 30, 26, 25, 22, 26, 28, 24, 25, 22]

# Insert comments to explain what each statement does
# Also include the output that will be printed for each statement

# List methods

# add the "bowling" string as a duplicate to the end of the list
hobbies.append("bowling")
# windsurfing bowling mini golf stand-up comedy knitting acrobatics cross-stitch bowling
print(hobbies)

# remove the first instance of the string "bowling" occuring in the list
hobbies.remove("bowling")
print(hobbies)
# windsurfing mini golf stand-up comedy knitting acrobatics cross-stitch bowling

# remove and return the value at the 7th position in the list (bowling)
# and store it in the popped_elements variable
popped_element = hobbies.pop(6)
# windsurfing mini golf stand-up comedy knitting acrobatics cross-stitch
print(hobbies)
# bowling was removed from the hobbies list
print(f"{popped_element} was removed from the hobbies list")

# Built-in functions

# print the number of elements in the feb_temperatures list
# 28
print(len(feb_temperatures))

# print the element in the list (of integers) that has the greatest value
# 35
print(max(feb_temperatures))

# print the element in the list (of strings) that has the highest 
# position alphabetically
# winsurfing
print(max(hobbies))

# print the element in the list (of integers) that has the lowest value
# 22
print(min(feb_temperatures))

# print the element in the list (of strings) that has the lowest
# position alphabetically
# acrobatics
print(min(hobbies))

# add the values for a total of all of the temperatures then print that total
# to the console
# 778
print(sum(feb_temperatures))

# calculate the average temperature by dividing the total temperatures by the
# number of temperatures (778/28) then print the average to the console
# 27.785714...
print(sum(feb_temperatures) / len(feb_temperatures))

# display a less precise average temperature by rounding it to the nearest
# thousandths place
# 27.786
print(round(sum(feb_temperatures) / len(feb_temperatures), 3))

# remove a segment (slice) of elements from the array starting from the 
# index 1 (mini golf) to *but not including* index 3 (knitting) in: windsurfing mini golf stand-up comedy knitting acrobatics cross-stitch
# windsurfing knitting acrobatics cross-stitch
del hobbies[1:3]
print(hobbies)


print("======= BONUS ===========")
print("\nBONUS original list is:")
print(hobbies)

# .index returns the index of the first occurrence of the value
# The starting and ending range are configurable but default from first to last
bonus_hobbies = list(hobbies) # don't change the source data
print("\nindex:")
location = bonus_hobbies.index("acrobatics")
print("Index of 'acrobatics':", location)

# .extend add a list to the end of another list
new_hobbies = ["swimming", "music", "hiking"]
bonus_hobbies = list(hobbies) # reset the temporary data
print("\nextend:")
bonus_hobbies.extend(new_hobbies)
print(bonus_hobbies)

# .insert to add an element at a specific position
# add a 0-degree temperature to the middle of the month (after the 15th item)
bonus_feb_temperatures = list(feb_temperatures) # reset the temporary data
print("\ninsert:")
bonus_feb_temperatures.insert(15,0)
print(bonus_feb_temperatures)

# .reverse the order of list elements
bonus_hobbies =  list(hobbies) # reset the temporary data
print("\nreverse:")
bonus_hobbies.reverse()
print(bonus_hobbies)

# .sort list elements a-z ascending
bonus_hobbies =  list(hobbies) # reset the temporary data
print("\nsort:")
bonus_hobbies.sort()
print(bonus_hobbies)
