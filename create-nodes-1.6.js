const block = document.createElement('div');

const list = document.createElement('ul');

const li_1 = document.createElement('li');
const link_1 = document.createElement('a');
link_1.textContent = 'наш инстаграм';
link_1.href = 'https://instagram.com/intocode';
li_1.appendChild(link_1);

const li_2 = document.createElement('li');
const link_2 = document.createElement('a');
link_2.textContent = 'наш сайт';
link_2.href = 'https://intocode.ru';
li_2.appendChild(link_2);

list.append(li_1, li_2);
block.appendChild(list);

document.body.appendChild(block);