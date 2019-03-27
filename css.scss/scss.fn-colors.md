# scss

## color functions

Scss provides some function that can be used to manipulate colors. Some of them include:

- mix($colorX, $colorY, weight) : This function is used to mix two color together. First argument is the first color, second is the second color and the third argument is the percentage of first color you want to mix.
- lighten($color, $amount): this function is used to return a lighter color. The first argument is the color and the second is the percentage of how much you want to lighten it.
- darken($color, $amount): Takes similar arguments as lighten function but this returns a darker color specified.
- opacify($color, $amount): This function returns a color with the opacity increase. The first argument is the color and the second is value between 0 and 1.
- transparentize($color, $amount): This function makes a color more transparent, it takes similar arguments to opacify. It returns a color with the opacity reduced. You can say it is the opposite of opacify.
- str-length(\$string): This function returns the number of characters in a string.
- percentage(\$number): This function converts number without unit to a percentage.
- round(\$number): This function rounds a number to the nearest whole number.
- min($number1, $number2, \$number3, …..): this function returns the minimum value from a set of numbers.
- random(): This returns a random number and takes no arguments.
- quote(\$string): This function adds quotes to a string.
- unquote(\$string): This function removes quotes from a string.
- to-lower-case(\$string): This function converts a string to lowercase.
- to-upper-case(\$string): This function converts a string to uppercase.
