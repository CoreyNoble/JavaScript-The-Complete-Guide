const task3Element = document.getElementById('task-3');

task3Element.addEventListener('click', outputTextOfChoice);

function outputTextOfChoice(){
    alert('Text of choice');
}

function outputName(name){
    alert('Name: ' + name);
}

function takesInThreeParams(param1, param2, param3){
    const result = param1 + ' ' + param2 + ' ' + param3;
    alert(result);
}

outputTextOfChoice();
outputName('Corey');
takesInThreeParams('PARAM1', 'PARAM2', 'PARAM3');