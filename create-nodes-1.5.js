const block_1 = document.createElement('div');
const block_2 = document.createElement('div');
const block_3 = document.createElement('div');

block_1.classList.add('red');
block_2.classList.add('green');
block_3.classList.add('blue');

block_3.textContent = 'я вложен'

block_2.appendChild(block_3);
block_1.appendChild(block_2);

console.log(block_1)