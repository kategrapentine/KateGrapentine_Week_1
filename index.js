var retailItemPrice = 9.99;
var wholesaleItemPrice = 6.25;

var myWalletAmount = 20.00;
var brotherWalletAmount = 50.25;

var myNumberOfFriends = 65;
var brotherNumberOfFriends = 81;

var myAge = 22
var brotherAge = 26

var myFirstName = 'Kate';
var brotherFirstName = 'Riley';

var maidenLastName = 'Grapentine';
var adoptedLastName = 'Green';

var myMidInitial = 'L';
var brotherMidInitial = 'M';

//varibles that preform operations:

var newMyWalletAmount = myWalletAmount - retailItemPrice;
var newBrotherWalletAmount = brotherWalletAmount - wholesaleItemPrice;

var myNewFriends = myAge / myNumberOfFriends;
var brotherNewFriends = brotherAge / brotherNumberOfFriends;

var myFullName = myFirstName + ' ' + myMidInitial + ' ' + maidenLastName;
var brotherFullName = brotherFirstName + ' ' + brotherMidInitial + ' ' + adoptedLastName;

//printing out the variables on the webpage

console.log('Retail Item Price: $' + retailItemPrice);
console.log('Wholesale Item Price: $' + wholesaleItemPrice);

console.log('I have $' + myWalletAmount + ' in my wallet.');
console.log('My brother has $' + brotherWalletAmount + ' in his wallet.');

console.log('I bought the item from a retailer, now I have $' + newMyWalletAmount + ' in my wallet.');
console.log('My brother bought the item from a wholesaler, now he has $' + newBrotherWalletAmount + ' in his wallet.');

console.log('My name is ' + myFirstName + ', my middle initial is ' + myMidInitial + ', and my last name is ' + maidenLastName + '.');
console.log('So my full name is ' + myFullName + ".");

console.log('My brothers name is ' + brotherFirstName + ', his middle initial is ' + brotherMidInitial + ", and he sometimes goes by the last name " + adoptedLastName + '.');
console.log('So his full name is ' + brotherFullName + '.');

console.log('I am ' + myAge + " years old and I have " + myNumberOfFriends + ' friends, which means I have made ' + myNewFriends + " new friends a year.");
console.log('My brother is ' + brotherAge + ' years old and he has ' + brotherNumberOfFriends + ' friends, which means he makes ' + brotherNewFriends + ' new friends a year.');