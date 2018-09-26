
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
//You are going to be given an array of integers.
//Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.
//If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
    for (i = 0; i < arr.length; i++) {
        let begSum = arr.slice(0, i).reduce((a, b) => a + b, 0)
        let endSum = arr.slice(i + 1).reduce((a, b) => a + b, 0)
        if (begSum === endSum) return i
    }
    return -1
}

//PERSISTENT BUGGER
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, 
//which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num, i = 0) {
    return (num.toString().length > 1)
        ? persistence(num.toString().split('').reduce((a, c) => a *= Number(c)), i += 1)
        : i
}

//YOUR ORDER PLEASE
// Your task is to sort a given string.Each word in the String will contain a single number.This number is the position the word should have in the result.
    // Note: Numbers can be from 1 to 9. So 1 will be the first word(not 0).
// If the input String is empty, return an empty String.The words in the input String will only contain valid consecutive numbers.
// For an input: "is2 Thi1s T4est 3a" the function should return "Thi1s is2 3a T4est"

function order(words) {
    arr = words.split(' ')
    answers = []
    for (i = 1; i <= arr.length; i++) {
        let answer = arr.filter(x => x.includes(i))
        answers.push(answer[0])
    }
    return answers.join(' ')
}

//STOP GNINNIPS MY SDROW
//Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). 
//Strings passed in will consist of only letters and spaces.
//Spaces will be included only when more than one word is present.

function spinWords(s) {
    return s.split(' ').map(word => (word.length > 4) ? word.split('').reverse().join('') : word).join(' ')
}

//DUBSTEP
//This description is really long, and not worth including here.

function songDecoder(song) {
    return song.split('WUB').filter(x => x !== '').join(' ')
}

//Tribonacci Sequence (Without Recursion)
function tribonacci(signature, n) {
    let answer = signature

    while (answer.length < n) {
        let lastThree = answer.slice(answer.length - 3)
        let newNumber = lastThree.reduce((acc, curr) => acc += curr, 0)
        answer.push(newNumber)
    }

    return answer.slice(0, n)
}

//A better way to do that:
function tribonacci(signature, n) {
    const result = signature.slice(0, n);
    while (result.length < n) {
        result[result.length] = result.slice(-3).reduce((p, c) => p + c, 0);
    }
    return result;
}

//Duplicate Encoder
function duplicateEncode(word) {
    word = word.toLowerCase().split('')
    return word.map((letter, i) => {
        let others = word.slice()
        others.splice(i, 1)
        if (others.includes(letter)) return ')'
        return '('
    }).join('')
}

//Take a Ten Minute Walk (I wanted to practice a switch - case statment)
function isValidWalk(walk) {
    let length = walk.length, x = 0, y = 0
    walk.forEach(direction => {
        switch (direction) {
            case 'n': y += 1; break
            case 'e': x += 1; break
            case 's': y -= 1; break
            case 'w': x -= 1; break
        }
    })
    return length === 10 && x === 0 && y == 0
}

//another clever answer:
function isValidWalk(walk) {
    function count(val) {
        return walk.filter(function (a) { return a == val; }).length;
    }
    return walk.length == 10 && count('n') == count('s') && count('w') == count('e');
}

//FIBONACCI (assuming 0 is the first number, not 1)
//Given n, return the nth number in the fibonacci sequence IF n is the index.
function fibonacci(n) {
    let base = [0, 1]
    for (let i = 2; i <= n; i++) {
        base[i] = base[i - 1] + base[i - 2]
    }
    return base[n]
}

//Same but IF n is the number in the sequence.
function fibonacci(n) {
    let base = [0, 1]
    for (let i = 2; i < n; i++) {
        base[i] = base[i - 1] + base[i - 2]
    }
    return base[n - 1]
}

//Given n, return the nth number in the fibonacci sequence with recursion if returning the number at INDEX n.

function fibonacci(n) {
    if (n < 1) return 0
    if (n <= 2) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

//Given n, return the nth number in the fibonacci sequence with recursion if returning the number at the nth position.

function fibonacci(n) {
    if (n <= 1) return 0
    if (n <= 3) return 1
    return fibonacci(n - 1) + fibonacci(n - 2)
}

