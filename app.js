//strings

let firstVariable = 'Hello World';
let secondVariable = undefined;
let yourName = 'Danielle';

firstVariable = 29;
secondVariable = firstVariable;
secondVariable = 'Hello Beautiful World';

let output = 'Hello my name is ${dannyG}';
console.log(output);

//// booleans

 const a = 4;
const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

 console.log(a < b); //true
 console.log(c > d); 
 console.log('Name' === 'Name');

// for the new two, use only  && or ||

console.log(true || false); //true
 console.log(false && false && false && false && false || true); //true
 console.log(false || false) //true
 console.log(e && 'Kevin'); //true
 console.log(a + b == c); //true
 console.log(a && a || d); //true
 console.log(48 && '48'); 

/// the farm

let animal = prompt("Name an animal");
 if (animal != "Cow") {
     console.log("Hey! You're not a cow!");
 } 

 else if (animal === "Cow") {
    console.log("Moooooooooooooooo!")
 }

 /// drivers ed

let currerntAge;

 currentAge = prompt("What is your current age?")
    if (currentAge >= 16) {
  console.log("Here are the keys!")
 }
 else if (current < 16) {
   console.log("Sorry, you're too young.")
 }
 else if (currentAge > 100) {
    console.log("You're too old to drive! Go home!")
 }

 // for(let i1 = 0; i1 < 10; i1++) {
//     console.log(i1);
// };
// for(let i2 = 10; i2 <= 400; i2++) {
//     console.log(i2);
// };
// for(let i3 = 12; i3 <= 4000; i3 += 3) {
//     console.log(i3);
// };

// Basics
// for (let i4 = 1; i4 <= 100; i4++) {
//     if (i4 % 2 == 0) {
//         console.log(`${i4} <-- is an even number`)
//     }
//     else {
//         console.log(i4)
//     }
// }
// get even

// for (let i5 = 0; i5 <= 100; i5++) {
//     if (i5 > 0 && !(i5 % 5)) {
//         console.log(`I found a ${i5}. High five!`)
//     }
//     if (i5 > 0 && !(i5 % 3)) {
//         console.log(`I found a ${i5}. Three is a crowd.`)
//     }
// }

// give me five

// let totalBalance = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let bank_account = 0;

// totalBalance.forEach(element => {
//     bank_account += element
// });

// console.log(bank_account)

// SAccount

// let bank_account_2 = 0;
// for(i = 0; i <= 10; i++) {
//     bank_account_2 += i;
// }

// console.log(bank_account_2)

// let bank_account_3 = 0;
// for(i = 0; i <= 100; i++) {
//     bank_account_3 += i * 2
// }

// console.log(bank_account_3)

//Arrays and control flow

//const myArray = [5, 10, 500, 20]
 //myArray.push('Aegon', 'Super fly')
// myArray.shift(myArray)
 //myArray.unshift('Bob Marley')
 //myArray.pop()
 //Array.prototype.reverse();
 //myArray.reverse();

 //console.log(myArray)

 // let biggSmall = prompt("Enter any number within 1-500")
// if ( biggSmall <= 100 ) {
//     console.log("little number")
// }
// else if ( biggSmall >= 100 ) {
//     console.log("big number")
// }

// let monkeyValue = prompt("Enter any number within 1-100")

// if ( monkeyValue < 5 ) {
//     console.log("little number")
// }
// else if (monkeyValue > 10) {
//     console.log("big number")
// }
// else {
//     console.log("monkey")
// }

 const kristynsCloset = [
        "left shoe",
        "cowboy boots",
         "right sock",
        "GA hoodie",
        "green pants",
        "yellow knit hat",
        "marshmallow peeps"
   ];
    
      console.log(`Kristyn is rocking that ${kristynsCloset[2]} today!`)
      kristynsCloset.splice(6, 0, "raybans")
      kristynsCloset.splice(5, 1, "stained knit hat")
      console.log(kristynsCloset)

      const thomsCloset = [
        [
          // These are Thom's shirts
          "grey button-up",
          "dark grey button-up",
          "light blue button-up",
          "blue button-up",
        ],[
          // These are Thom's pants
          "grey jeans",
          "jeans",
          "PJs"
        ],[
          // Thom's accessories
          "wool mittens",
          "wool scarf",
          "raybans"
        ]
      ];

      thomsCloset[0].pop();
      thomsCloset[1].push('Footie Pajamas')
      console.log('Thom has a great outfit while wearing his ${thomsCloset[0][2]}, with his ${thomsCloset[1][2]}, while rockin some ${thomsCloset[2][2]}')