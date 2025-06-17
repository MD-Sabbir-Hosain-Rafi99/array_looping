// array-looping-tasks

/**
 * Task 1
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
 */

// const colors = ['red', 'blue', 'green', 'yellow', 'orange'];
// const output = [];
// for(let i = colors.length - 1; i >= 0; i--){
//     const color = colors[i];
//     output.push(color);
// }
// console.log(output);


/**
 * Task 2
Write a JavaScript code to get the even numbers from an array using any looping technique.

Input: const numbers = [12, 98, 5, 41, 23, 78, 46];

Output:

[12, 98, 76, 46]
 */

// const numbers = [12, 98, 5, 41, 23, 78, 46];
// let evenNumbers = [];
// let oddNumbers = [];
// for(const number of numbers){
//     if (number % 2 == 0) {
//         evenNumbers.push(number);
//     }else{
//         oddNumbers.push(number)
//     }
// }
// console.log(evenNumbers);
// console.log(oddNumbers);



/**
 * Task 3
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
 */

// var numbers = ['Tom', 'Tim', 'Tin', 'Tik'];
// let concatenate = '';
// for(const number of numbers){           
//     concatenate = concatenate + number;
// }
// console.log(concatenate);




/**
 * Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

Input: const statement = 'I am a hard working person'

Output:

'person working hard a am I'
 */

// const statement = 'I am a hard working person'
// const rev = statement.split(' ').reverse().join(' ')
// console.log(rev);