// 1
const sayHello1 = (name = 'User') => console.log('Hi ' + name);
sayHello1('Corey');

// 2
const sayHello2a = (intro, name) => console.log(intro + ' ' + name);
sayHello2a('Hello', 'Corey');

const sayHello2b = () => console.log('Welcome 1');
sayHello2b();

const sayHello2c = () => 'Welcome 2';
console.log(sayHello2c());

// 3
sayHello1();

// 4
const checkInput = (cb, ...args) => {
  for (const arg of args) {
    if (arg === '') {
      console.log(`Error: an argument that was passed in contains an empty string`);
      return;
    }
  }

  cb();
};

const allStrings = () => console.log('Success: Calback fired, No arguments contain any empty strings');

checkInput(allStrings, 'a', 'b', 'c', 'd', 'e');
checkInput(allStrings, '', '', 'c', 'd', 'e');