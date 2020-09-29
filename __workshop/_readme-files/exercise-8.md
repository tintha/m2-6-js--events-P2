# Exercise 8 - Password suggest

If the user enters a password which is too short, suggest a random password for them!

A good password should be quite long (25+ characters) and made up of words that are easy-to-remember. For example, 'eat-all-classroom-decisions' is a more secure password than 'w0g\$lgA5'. And I know which one I'd find easier to remember.

If the user's password is too short, suggest a random password for them:

![Password suggestion](../../__lecture/assets/suggestion.png)

You can do this by creating a big list of nouns, and selecting 4-5 of them at random. You can use `Math.random()` to get a random number between 0 and 1, and `Math.round()` to round a decimal number.
