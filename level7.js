//VOWEL COUNT
// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and / or spaces.

function getCount(str) {
    let vowelsCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']
    str.split('').forEach(letter => {
        if (vowels.includes(letter)) vowelsCount += 1
    })
    return vowelsCount
}

//PIZZA PAYMENTS
// Kate and Michael want to buy a pizza and share it. Depending on the price of the pizza, they are going to divide the costs:

// If the pizza is less than €5, - Michael invites Kate, so Michael pays the full price.
// Otherwise Kate will contribute 1 / 3 of the price, but no more than €10(she's broke :-) and Michael pays the rest.
// How much is Michael going to pay ? Calculate the amount with two decimals, if necessary.

function michaelPays(cost) {
    let total
    (cost < 5)
        ? total = cost
        : (5 <= cost && cost <= 30)
            ? total = cost * (2 / 3)
            : total = cost - 10
    return Number(total.toFixed(2))
}

//GET THE MIDDLE CHARACTER
// You are going to be given a word.
//Your job is to return the middle character of the word.
//If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

function getMiddle(s) {
    half = s.length / 2
    return answer = (s.length % 2 === 0)
        ? s.substring(half - 1, half + 1)
        : s.substring(half, half + 1)
}

//MUMBLING

//Just examples
// accum("abcd");    "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    "C-Ww-Aaa-Tttt"

function accum(s) {
    return s.split('').map((letter, i) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(i)
    }).join('-')
}

//HIGHEST AND LOWEST
//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
    numbers = numbers.split(' ')
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

//YOU'RE A SQUARE!
//Given an integral number, determine if it is a perfect square number

function isSquare(n) {
    return Math.sqrt(n) === Math.round(Math.sqrt(n))
}

//ALTERNATIVE SOLUTION:::
function isSquare(n) {
    return Number.isInteger(Math.sqrt(n))
}