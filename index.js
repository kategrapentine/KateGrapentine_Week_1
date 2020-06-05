//declaring my variables:

let retailItemPrice = 9.99;
let wholesaleItemPrice = 6.25;

let myWalletAmount = 20.00;
let brotherWalletAmount = 50.25;

let myNumberOfFriends = 65;
let brotherNumberOfFriends = 81;

let myAge = 22
let brotherAge = 26

const myFirstName = 'Kate';
const brotherFirstName = 'Riley';

const maidenLastName = 'Grapentine';
const adoptedLastName = 'Green';

const myMidInitial = 'L';
const brotherMidInitial = 'M';

//varibles that preform operations:

let newMyWalletAmount = myWalletAmount - retailItemPrice;
let newBrotherWalletAmount = brotherWalletAmount - wholesaleItemPrice;

let myNewFriends = myAge / myNumberOfFriends;
let brotherNewFriends = brotherAge / brotherNumberOfFriends;

const myFullName = myFirstName + ' ' + myMidInitial + ' ' + maidenLastName;
const brotherFullName = brotherFirstName + ' ' + brotherMidInitial + ' ' + adoptedLastName;

//printing out the variables on the webpage:

console.log('Retail Item Price: $', retailItemPrice);
console.log('Wholesale Item Price: $', wholesaleItemPrice);

console.log('I have $', myWalletAmount, 'in my wallet.');
console.log('My brother has $', brotherWalletAmount, 'in his wallet.');

console.log('I bought the item from a retailer, now I have $', newMyWalletAmount, 'in my wallet.');
console.log('My brother bought the item from a wholesaler, now he has $', newBrotherWalletAmount, 'in his wallet.');

console.log('My name is', myFirstName, ', my middle initial is', myMidInitial, ', and my last name is', maidenLastName, '.');
console.log('So my full name is ' + myFullName + ".");

console.log('My brothers name is', brotherFirstName, ', his middle initial is ' + brotherMidInitial + ", and he sometimes goes by the last name " + adoptedLastName + '.');
console.log('So his full name is', brotherFullName, '.');

console.log('I am ', myAge ," years old and I have ", myNumberOfFriends, ' friends, which means I have made ', myNewFriends, " new friends a year.");
console.log('My brother is ', brotherAge, ' years old and he has ', brotherNumberOfFriends, ' friends, which means he makes ', brotherNewFriends, ' new friends a year.');