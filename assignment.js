// 1
const task1El1 = document.getElementById('task-1');
task1El1.style.backgroundColor = 'black';

const task1El2 = document.querySelector('li');
task1El2.style.color = 'white';

// 2
// const docTitle1 = document.querySelector('title');
// docTitle1.textContent = 'Assignment 2a - Solved!';

const docHead = document.head;
const docTitle2 = docHead.querySelector('title');
docTitle2.textContent = 'Assignment 2b - Solved';

// 3
// const h1 = document.querySelector('h1');
const h1 = document.getElementsByTagName('h1');
h1[0].textContent = 'Assignment 3 - Solved!';