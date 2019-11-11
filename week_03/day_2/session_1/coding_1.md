Complete the questions by hand and submit your answers in the space provided

You cannot and should not use any JavaScript compliers! Any use of online or offline compliers is considered cheating!

Boolean Logic
Look at the code involving logical operators and evaluate the output. Your answers should be either true or false.
true && true || false && false
Answer
true

true == false || false == false
Answer
true

9932494354545 % 2 != 1 
Answer
false

190 + 20 >= 100 && 50 <= 50
Answer
true

var A = true
var B = true 
!(A || B) == !A && !B
Answer
false

!true || !true || true && true && !true
Answer
false

var A = true 
var B = false
var C = false 
var D = true
((A || B) && (C || D)) == ((A || B) && C) || ((A || B) && D)
Answer
true

var x = false
var y = false 
var z = false
x && z || !x && y || z || y == x && z || !x && y
Answer
true

If statements and Arithmetic Operators:
What is the value of d ?
var a = 50
var b = a + a
var c = b * b + 1
var d = c % 2
Answer
1

What is the value of grade ?
var marks = 1967
marks = marks % 100
var grade
if(marks > 90){
  grade = 'A'
}
else if(marks > 80 && marks <= 90){
  grade = 'B'
}
else if(marks > 70 && marks <= 80){
  grade = 'C'
}
else if(marks > 60 && marks <= 70){
  grade = 'D'
}
else{
  grade = 'F'
}
Answer
D

What does the following code print in the alert window?
var browser = 'Brave'
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
Answer
We hope that this page looks ok!

What is the value of y?
var x = 12 
var y = 12 + "12"
Answer
1212

