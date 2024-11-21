@echo off
@echo *** Expect sum 3 4 = 7:
node index.js sum 3 4
@echo *** Expect difference 3 4 = -1:
node index.js difference 3 4
@echo *** Expect product 3 4 = 12:
node index.js product 3 4
@echo *** Expect quotient 3 4 = 0.75:
node index.js quotient 3 4

@echo.
@echo Error conditions...
@echo.
@echo *** Insufficient parameters
node index.js sum
@echo *** Invalid operator
node index.js wrong 3 4
@echo *** Invalid first value
node index.js sum three 4
@echo *** Invalid second value
node index.js sum 3 four
