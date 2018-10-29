
// part one!

console.log('\n');
console.log('Part one of the assignment, Hello world in different languages'+'\n');
const lang = ['English: ','French: ','German: ','Dutch: ','Farsi: '];
const helloWorld = ['Hello world','Salut le monde','Hallo welt','Hallo wereld','سلام دنیا'];
for (let i=0;i<lang.length;i++) {
    console.log(lang[i] + helloWorld[i]);
}
console.log('\n');



// part two!

console.log("Part two of the assignment, I'm awesome"+'\n');
console.log("I'm awesome");
console.log('(the solution is to use double quotation marks)');
console.log('\n');



// part three!

console.log('Part three of the assignment, Declaring variable x and initializing it with an integer'+'\n');
var x;
console.log('The value of my variable x will be: undefined!');
console.log(x);
x = 24;
console.log('The value of my variable x will be: 24!');
console.log(x);
console.log('\n');



// part four!

console.log('Part four of the assignment, Declaring variable y and assigning a string to it.'+'\n');
let y = 'My name is Reza!';
console.log("The value of my string will be: 'My name is Reza'");
console.log(y);
y = 'I live in Utrecht.';
console.log("The new value of my string will be: 'I live in Utrecht'");
console.log(y);
console.log('\n');



// part five!
console.log('Part five of the assignment, rounding number 7.25 to the nearest integer.'+'\n');
var z = 7.25;
console.log('The rational number is: ' + z);
var a = Math.round (z);
console.log('The nearest round integer is: ' + a);
var highestValue;
if (z>a) {
    highestValue = z ;
} else {
    highestValue = a ;
}
console.log('The highest value is: ' + highestValue);
console.log('\n');



// part six!
console.log('Part six of the assignment, Arrays.'+'\n');
const books = [];
console.log('The value of the first array is: nothing!');
console.log(books);
let favAnimals = ['lions ','dogs ','horses '];
console.log('The second array is: ' + favAnimals);
const DaansFavAnimal = ',baby pig';
favAnimals = favAnimals+DaansFavAnimal
console.log('The third array is: ' + favAnimals);
console.log('\n');



// part seven!
console.log('Part seven of the assignment, more strings.'+'\n');
let myString = "this is a test."
console.log(myString);
console.log('The length of this sentence is: ' + myString.length + ' characters.');
console.log('\n');



// part eight!
console.log('Part eight of the assignment, checking the types of two variables and printing out.'+'\n');
const myAge = 24 ;
const myName = 'Reza';
const myCity = 'Utrecht';
const myLang = 'Farsi';
console.log("The value of 'myAge' is: 24.");
console.log("The value of 'myName' is: Reza.");
console.log("The value of 'myCity' is: Utrecht.");
console.log("The value of 'myLang' is: Farsi." + '\n');
console.log('I still have no idea what will happen cause I dont understand typeof!'+ '\n');
console.log("The type of 'myAge' is: " + typeof myAge);
console.log("The type of 'myName' is: " + typeof myName);
console.log("The type of 'myCity' is: " + typeof myCity);
console.log("The type of 'myLang' is: " + typeof myLang + '\n');
console.log('Okay I got what typeof is, Yay. Now lets compare them!'+ '\n');
const TYPE_OF = [typeof myAge,typeof myName,typeof myCity,typeof myLang]
let i;
for (i=0;i<3;i++) {
    if ( TYPE_OF[i]==TYPE_OF[i+1]  ) {
        console.log(TYPE_OF[i] + ' and ' + TYPE_OF[i+1] +' are the SAME TYPE');
    } else {
        console.log(TYPE_OF[i] + ' and ' + TYPE_OF[i+1] + ' are DIFFERENT TYPES');
    };
}
for (i=0;i<2;i++) {
    if (TYPE_OF[3]==TYPE_OF[i]) {
        console.log(TYPE_OF[3] + ' and ' + TYPE_OF[i] +' are the SAME TYPE');
    } else {
        console.log(TYPE_OF[3] + ' and ' + TYPE_OF[i] + ' are DIFFERENT TYPES');
    };
}
console.log('\n');




// part nine!
console.log('Part nine of the assignment, remainder.'+'\n');
console.log('If x equals 7, and the only other statement is x = x % 3, the new value of x would be: ');
var x;
x = 7;
x=x%3;
console.log(x + '\n');
console.log('% is the remainder which gives us what remains after the two numbers are divided.' + '\n');
var q=20;
var z=5;
var g=8;
console.log('Now imagine q='+ q +' and z='+ z +' and g='+ g +' , then:');
console.log('q%z='+q%z);
console.log('q%g='+q%g);
console.log('g%z='+g%z);
console.log('\n');



// part ten!
console.log('Part ten of the assignment, questions.'+'\n');
const types = ['hello world',10,true];
console.log('The array is: '+ types + '\n');
console.log('The data types in the array are:')
let j;
let arr;
for (j=0;j<=(types.length-1);j++) {
    arr = [typeof types [j]];
    console.log( arr);
}
console.log('');
let k=0;
if (arr[k] == arr[(k+1)] ) {
        console.log('The types are all the same.');
} else {
        console.log('There are different types!');
} 
console.log('\n');
const d1=6/0;
const d2=10/0;
console.log('6/0='+d1+'\n'+'10/0='+d2+'\n'+'\n'+'Is 6/0 equal to 10/0?'+'\n');
if (d1===d2) {
    console.log('yes');
} else {
    console.log('no');
}
console.log('\n');
