
//FIND THE PARITY OUTLIER
// You are given an array(which will have a length of at least 3, but could be very large) containing integers.
//The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N.
//Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers) {
    let evens = integers.filter(num => num % 2 === 0)
    let odds = integers.filter(num => num % 2 !== 0)
    return (evens.length === 1)
        ? evens[0]
        : odds[0]
}

//MULTIPLES OF 3 OR 5
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number) {
    let multiples = []
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) multiples.push(i)
    }
    return multiples.reduce((acc, cur) => acc += cur, 0)
}

//ALTERNATIVE SOLUTION
function solution(number) {
    let sum = 0
    for (let i = 3; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) sum += i
    }
    return sum
}

//fIND THE ODD INT
// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let options = []
    let answer = 0
    A.forEach(num => (!options.includes(num)) && options.push(num))
    options.forEach(num => {
        if (A.filter(x => x === num).length % 2 !== 0) answer = num
    })
    return answer
}

//SUM OF THE DIGITS
//In this kata, you must create a digital root function.
//A digital root is the recursive sum of all the digits in a number.
//Given n, take the sum of the digits of n.
//If that value has two digits, continue reducing in this way until a single - digit number is produced.
//This is only applicable to the natural numbers.

function reduced(num) {
    return num.toString().split('').reduce((a, c) => Number(a) + Number(c))
}

function digital_root(n) {
    while (n.toString().length > 1) {
        n = reduced(n)
    }
    return n
}

//EQUAL SIDES OF AN ARRAY
