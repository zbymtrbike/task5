let score = 0;

let answer1 = "Baku";
let answer2 = 8;
let answer3 = "JavaScript";

//1.
if (answer1 === "Baku") {
  score++;
}

if (answer2 === 8) {
  score++;
}


//2.
function checkAnswer(answer, correctAnswer) {
    if (answer === correctAnswer) {
        return true;
    } else {
        return false;
    }
}


//3.
const points = [1, 1, 1, 2, 2];

for (let i = 0; i < points.length; i++) {
  score += points[i];
}
//4
if (score >= 0 && score <= 2) {
  result = "Daha çox çalış";
} else if (score >= 3 && score <= 4) {
  result = "Yaxşı nəticə";
} else if (score >= 5) {
  result = "Əla nəticə";
}
//6.
const students = ["Nigar", "Ramal", "Emil"];

students.forEach(function(student) {
  console.log( student);
});