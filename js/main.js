
// 1 //
document.write('<br> // 1 // <br>')

let arrOne = [];
for (let i = 10; i <= 20; i++) {
    arrOne.push(` ${i}`);
}

document.write(arrOne + '<br><br><br>');


// 2 //
document.write('// 2 // <br>')

let arrTwo = [];
for (let i = 10; i <= 20; i++) {
    square = Math.pow(i, 2);
    arrTwo.push(` ${square}`);
}

document.write(arrTwo + '<br><br><br>');


// 3 //
document.write('// 3 // <br>')

for (let i = 7; i <= 7; i++) {
    for (let j = 1; j <= 10; j++) {
        number = i * j;
        document.write(`${i} * ${j} = ${number}`);
        document.write('<br>');
    }
}

document.write('<br><br>');


// 4 //
document.write('// 4 // <br>')

let sumFour = 0;
for (let i = 1; i <= 15; i++) {
    sumFour += i;
}

document.write(sumFour + '<br><br><br>');


// 5 //
document.write('// 5 // <br>')

let productFive = 15;
for (let i = 16; i <= 35; i++) {
    productFive *= i;
}

document.write(productFive + '<br><br><br>');


// 6
document.write('// 6 // <br>')

let arrSix = [];
let averageSix = 0;
for (let i = 1; i <= 500; i++) {
    arrSix.push(i);
    averageSix += i;
}
// console.log(arrSix);
// console.log(averageSix)

averageSix = averageSix / arrSix.length;
document.write(averageSix + '<br><br><br>');


// 7 //
document.write('// 7 // <br>')

let sumSeven = 0;
for (let i = 30; i <= 80; i++) {
    if (i % 2 == 0) {
        sumSeven += i;
        // console.log(sumSeven);
    }
}

document.write(sumSeven + '<br><br><br>');


// 8 //
document.write('// 8 // <br>')

let numbersEight = [];
for (let i = 100; i <= 200; i++) {
    if (i % 3 == 0) {
        numbersEight.push(` ${i}`);
        // console.log(numbersEight);
    }
}

document.write(numbersEight + '<br><br><br>');


// 9, 10, 11 //
document.write('// 9, 10, 11 // <br>')

let numberNine = 70;
let divisorNine = [];
let evenNine = [];
let sumNine = 0;

for (let i = 1; i <= numberNine; i++) {
  if (i != 1 && i != numberNine) {
       if (numberNine % i === 0) {
           divisorNine.push(` ${i}`);
           if (i % 2 === 0) {
            evenNine.push(i);
           }
        }
    } 
}
// console.log(divisorNine)
// console.log(evenNine);

for (let i = 0; i < evenNine.length; i++) {
        sumNine += evenNine[i];
}

document.write('Divisors = ' + divisorNine + '<br>');
document.write('Evens = ' + evenNine.length + '<br>');
document.write('Sum of evens = ' + sumNine + '<br><br><br>')


// 12 //
document.write('// 12 // <br>')

for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        number = i * j;
        document.write(`${i} * ${j} = ${number}`);
        document.write('<br>');
    }
    document.write('<br>');
}
