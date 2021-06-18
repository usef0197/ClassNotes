let myName = "Yousef";
let friendName = "John";
const myNameLength = myName.length;
const friendNameLength = friendName.length;

if (myNameLength > friendNameLength) {
    console.log(`${myName}'s name is longer than ${friendName}'s`);
} else if (myNameLength < friendNameLength) {
    console.log(`${friendName}'s name is longer than ${myName}'s`);
} else {
    console.log(`${friendName} and ${myName} are the same length`);
}


if (myNameLength > friendNameLength) {
    console.log(`${myName}'s name is longer than ${friendName}'s by ${myNameLength - friendNameLength} letters`);
} else if (myNameLength < friendNameLength) {
    console.log(`${friendName}'s name is longer than ${myName}'s by ${friendNameLength - myNameLength} letters`);
} else {
    console.log(`${friendName} and ${myName} are the same length with ${myNameLength} characters`);
}