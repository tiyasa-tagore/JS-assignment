// problem no 1 

function mindGame(num1) {

    if (typeof num1 !== 'number') {
        return 'plz, enter a number'
    }


    const sum = (num1 * 3 + 10) / 2 - 5;


    // display the sum
    return sum
}
// call function that adding 10 with the multipliaction of num1 then dividing with 2 and then subtracting 5
// const result1 = mindGame(5);
// console.log(result1)




// problem no 2

function oddEven(word) {
    if (typeof word !== 'string') {
        return 'plz, enter a string'
    }
    const length = word.length;

    //check if the number is even
    if (length % 2 == 0) {
        return 'even'
    }
    // if the number is odd
    else {
        return 'odd'
    }
}
// calling odd even funtion by condition check 
// const result2 = oddEven('five);
// console.log(result2);




// problem no 3

function isLGSeven(num) {
    if (typeof num !== 'number') {
        return 'plz, enter a number'
    }
    if (num > 7) {
        return num * 2;
    }
    else {
        return num - 7;
    }
    
}
// const result = isLGSeven(9);
// console.log(result);




// problem no 4 
function findingBadData(numbers) {
    
    let neg_count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < 0) {
            neg_count++;
        }
    }
    return neg_count
}

// const numbers = [-8, 10, 23, 44, -80, -15, -1]
// const counts = findingBadData(numbers);
// console.log(counts);




// problem no 5

function gemsToDiamond(f1, f2, f3) {
    if (typeof f1 !== 'number' || typeof f2 !== 'number' || typeof f3 !== 'number' ) {
        return 'plz, enter a number'
    }

    if (((f1 * 21) + (f2 * 32) + (f3 * 43)) < 2000) {
        const total = (f1 * 21) + (f2 * 32) + (f3 * 43);
        return total;
    }
    else {
        return total = (f1 * 21 + f2 * 32 + f3 * 43) - 2000;
    }

}
// const diamond = gemsToDiamond(20,30,40);
// console.log(diamond);