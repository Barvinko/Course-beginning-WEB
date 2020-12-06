    //1 task: perimeter of square
let side = +prompt('1 task: perimeter of square\n Your side of square:');
let perimeter = 4 * side; 
console.log(`Perimeter of square: ${perimeter}`);
alert(`perimeter of square ${perimeter}`);
    //2 task: area of side cube and volume of cube
let sideCube = +prompt('2 task: area of side cube and volume of cube\n Your side of Cube:');
let areaCube = sideCube ** 2;
console.log(`areaCube: ${areaCube}`);
let volumeCube = sideCube ** 3;
console.log(`volumeCube: ${volumeCube}`);
alert(`Volume of cube: ${volumeCube}`);
    //3 task: circumference and area of a circle
let radius = +prompt('3 task: circumference and area of a circle\n Your radius:');
let circumference = 2 * Math.PI * 3;
console.log(`circumference ${circumference}`);
let areaCircle = 2 * Math.PI * radius ** 2;
console.log(`areaCircle ${areaCircle}`);
alert(`Area of circle: ${areaCircle}`);
    //4 task: density of subctanc
let massSubctanc = +prompt('4 task: density of subctanc\n Your mass of subctanc:');
let valumeSubctanc = +prompt('And your valume of subctanc:');
let density = massSubctanc * valumeSubctanc;
console.log(`density ${density}`);
alert(`Density of subctanc: ${density}`);
    //5 task: density of people in territory
let people = +prompt('5 task: density of people in territory\n Your number of people:');
let territory = +prompt('And your territory size:');
let densityPeople = people/territory;
console.log(`densityPeople ${densityPeople}`);
alert(`Density of people: ${densityPeople}`);
    //6 task: find hypotenuse of rectangular triangle
let cathetus1 = +prompt('6 task: find hypotenuse of rectangular triangle\n Your first carthetus:');
let cathetus2 = +prompt('Your second carthetus:');
let hypotenuse = cathetus1 ** 2 + cathetus2 ** 2;
console.log(`hypotenuse ${hypotenuse}`);
alert(`Hypotenuse: ${hypotenuse}`);
    //7 task:find y
let a = +prompt('7 task:find y with help value a\n Your value a:');
let y =(a ** 2 + 10)/Math.sqrt(a ** 2 + 1);
console.log(`y: ${y}`);
alert(`y: ${y}`);


