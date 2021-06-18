/* BRONZE
​
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 

​
​
/SILVER
​
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
​
*/


let car = {
    year: 2007,
    model: "Honda Civic",
    Sedan: true,
    object: {
        car:"sport"
    }
}

console.log(typeof car.year);

if(typeof car.model=="string"){
    console.log("This is a string")

} else if (typeof car.year == "number"){
    console.log("This is a number");
} else if (typeof car.sedan == "boolean"){
    console.log ("This is a boolean");
} else {
    console.log ("who are you?");
}
