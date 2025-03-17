# BONUS:
#
# Can you edit the code so that continuous while loop (i.e., the while 
# True: loop) uses a membership operator conditional in conjunction with the 
# play_again variable, so you can remove the conditional check at the end of 
# the program?
#

"""This script is a message printer that asks the user for a message and the
number of times to print the message.
The user can choose to play again or exit the game.
"""

# Keep looping until we exit the loop
while True:

    print("Welcome to the message printer!")
    message_to_print = input("What message do you want to print? ")

    # Declare user_number
    user_number = ""

    # Keep looping while user_number is not an integer
    while not isinstance(user_number, int):
        # Ask the user how many numbers to loop through
        user_number = input("How many times do you want to print your "
                            "message? ")

        # Validate the input is a number
        if user_number.isdigit():
            user_number = int(user_number)

            
            # Ask the user if they are happy with their input or want choose a
            # different number
            print("Are you happy with your choice of " + str(user_number)
                  + "?\n")
            user_play = input("Type 'y' to play, 'n' to try again, or 'q' to "
                              "exit: ")
            # Check if the user wants to play, try again, or exit
            #if user_play == 'n':
            if 'n' in user_play:    # BONUS
                # Break the loop and start the game
                user_number = ""
                break
            #elif user_play == 'y':
            elif 'y' in user_play:    # BONUS
                # Reset the user_number and start the loop again
                #user_number = 0    # this would always loop the message 0 times!
                break
            #elif user_play == '1':
            elif 'q' in user_play:    # BONUS
                # Exit the game
                print("Goodbye!")
                exit()
            else:
                print("I don't understand that choice, I'm going to assume "
                      "it's okay.")

        else:
            print("You didn't input a valid number")

    if isinstance(user_number, int):
        # Loop through the numbers.
        for i in range(user_number):
            # Print the number in the range and the message
            print(i + 1, message_to_print)

            # Limit the range to 20
            if i >= 20:
                print("Your input number is too high, breaking loop.")
                break
    else:
        print("(Starting over)")
        continue

    # Ask the user if they want to play again
    play_again = input("Would you like to play again? (y/n): ")
    if play_again.lower() != 'y':
        print("Goodbye!")
        #continue   # why would you want to continue the loop?!
        break
