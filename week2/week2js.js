
// part one!

console.log('\n');
console.log('Part one of step four, Strings'+'\n');
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log('The length of the string is: '+myString.length);
let words = myString.split(',');
console.log(words);



// part two!
console.log('\n');
console.log('Part two of step fout, Arrays'+'\n');
let favoriteAnimals = ['blowfish' , 'capricorn' , 'giraffe'];
console.log('The first array is: ' + favoriteAnimals +'\n');
favoriteAnimals.splice(3,0,'turtle');
console.log('The second array is: ' + favoriteAnimals +'\n');
favoriteAnimals.splice(1,0,'meerkat');
console.log('The third array is: '+ favoriteAnimals+'\n');
console.log('The length of the third array is: ' + favoriteAnimals.length + '\n' );
favoriteAnimals.splice(3,1);
console.log('The fourth array is: ' + favoriteAnimals + '\n' );
let j;
for ( j=0 ; j<favoriteAnimals.length ; j++ ) {
    if (favoriteAnimals[j]==='meerkat') {
        console.log("The index of 'meerkat' is: " + j);
        favoriteAnimals.splice(j,1);
    }
}
console.log('The fifth array is: '+ favoriteAnimals);
console.log('\n');

/* another way to find the index is to use indexOf :
    console.log(favoriteAnimals.indexOf('meerkat));
 */
