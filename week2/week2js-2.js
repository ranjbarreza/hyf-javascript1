
//more JS, 1:
console.log('\n'+'more JS, 1:'+'\n');
let a;
let b;
let c;
function sum(a, b, c) {
    return a+b+c ;
}
console.log('The numbers are: 2, 3, 4');
console.log('The sum would be: '+sum (2,3,4));
console.log('\n');




//more JS, 2:
console.log('more JS, 2:'+'\n');
let d;
function colorCar (d) {
    return 'a ' + d + ' car' ;
}
console.log(colorCar('red'));
console.log('\n');





//more JS, 3:
console.log('more JS, 3:'+'\n');
let e={ name: 'Reza', age: 24};
function get (e) {
    return e.name +' '+ e.age ;
}
console.log(get(e));
console.log('\n');





//more JS, 4:
console.log('more JS, 4:'+'\n');
let color;
let code;
function vehicleType (color, code) {
    if (code==1) {
        return color + ' car' ;
    } else {
        return color + ' motorbike' ;
    }
}
console.log(vehicleType('blue', 1));
console.log('\n');





//more JS, 5:
console.log('more JS, 5:'+'\n');
console.log( (3===3 && "yes") || (3==!3 || "no") );
console.log('The code is: (3===3 && "yes") || (3==!3 || "no")');
console.log('\n');





//more JS, 6:
console.log('more JS, 6:'+'\n');
let age;
function vehicle (color, code, age) {
    if (code==1) {
        if ( age>0 ) {
            return 'used ' + color + ' car' ;
        } else {
            return 'new ' + color + ' car' ;
        }
    } else {
        if ( age>0 ) {
            return 'used ' + color + ' motorbike' ;
        } else {
            return 'new ' + color + ' motorbike' ;
        }
    }
}
console.log(vehicle('blue', 1, 0));
console.log('\n');



//more JS, 7,8:
console.log('more JS, 7, 8:'+'\n');
let listVehicle = ["car", "motorbike", "caravan", "bike"];
console.log('The list is: ' + listVehicle);
console.log('The third elemnt is: '+listVehicle[2]);
console.log('\n');








//more JS, 10:
console.log('more JS, 10:'+'\n');
for (i=0;i<(listVehicle.length);i++) {
    if (i==0) {
        listVehicle[i]=listVehicle[i] + 's' ;
    }
    else if (i<(listVehicle.length-1)) {
        listVehicle[i]=' '+listVehicle[i] + 's' ;
    } else {
        listVehicle[i]=' and ' +listVehicle[i] + 's.' ;
    }
}

/*listVehicle[(listVehicle.length-1)]= ' and ' +listVehicle[(listVehicle.length-1)] + 's.' ; */
console.log("Amazing Joe's Garage, we service "+ listVehicle);
console.log("Amazing Joe's Garage, we service "+listVehicle[0]+','+listVehicle[1]+','+listVehicle[2]+ listVehicle[3]);
console.log('\n');




//more JS, 11:
console.log('more JS, 11:'+'\n');
console.log("Yes! That's possible.");
console.log('\n');



//more JS, 12,13,14:
console.log('more JS, 12, 13, 14:'+'\n');
let emptyObj ={};
let teachers = {name1: 'Philipp',name2:'Claudio',name3:'Frank',name4:'Arco',name4:'Rogier',lang1:'HTML/CSS',lang2:'GIT',lang3:'JS'};
console.log(teachers.name2);
console.log('\n');




//more JS, 15:
console.log('more JS, 15:'+'\n');
let x = [1,2,3];
let y = [1,2,3];
let z = y;
console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
console.log('\n');



//more JS, 16:
console.log('more JS, 16:'+'\n');
let o1 = { foo: 'bar HI' };
let o2 = { foo: 'bar BYE' };
let o3 = o2;
console.log(o1);
console.log(o2);
console.log(o3);
console.log('The order is important, otherwise the program will crash!');
console.log('\n');



//more JS, 17:
console.log('more JS, 17:'+'\n');
let bar = 42;
console.log('the type is: ' + typeof (typeof bar));
console.log('\n');