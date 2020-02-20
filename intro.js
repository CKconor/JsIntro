var firstName = prompt("What is your First Name?")
var lastName = prompt("What is your Surname?")
var age = prompt("What is your Age?")

alert("Great so your name is " + firstName + "" + lastName);
alert("and your age is " + age);


var age = prompt("What is your Age?")

var days = age * 362.25;

alert("So you are " + days + " " + "days old")

var age = prompt("What is your Age?")

if (age < 0) { alert("please enter a valid age") }

if (age == 21) { alert("Happy 21st birthday") }

if (age % 2 !== 0) { alert("Your age is odd") }

if (age % Math.sqrt(age) === 0) {
    alert("Your age is a perfect square")
}

var x = -10

while (x <= 19) {
    console.log(x);
    x++;
}

var even = 10

while (even <= 40) {
    if (even % 2 == 0) {
        console.log(even);
    }
    even++;
}



var odd = 300

while (odd <= 333) {
    if (odd % 2 == 1) {
        console.log(odd);
    }
    odd++;
}

var divide = 5

while (divide <= 50) {
    if (divide % 15 == 0) {
        console.log(divide);
    }
    divide++;
}



for (var i = -10; i <= 19; i++) {
    console.log(i);
}

for (var i = 10; i <= 40; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

for (var i = 300; i <= 333; i++) {
    if (i % 2 === 1) {
        console.log(i);
    }
}

for (var i = 5; i <= 50; i++) {
    if (i % 15 === 0) {
        console.log(i);
    }
}