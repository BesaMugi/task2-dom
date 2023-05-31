const body = document.createElement('body');
const list = document.createElement('ul');

function render(arr) {
    for(i = 0; i < arr.length; i++){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = arr[i].url;
        a.textContent = arr[i].name;
        li.appendChild(a);
        list.appendChild(li);
        document.body.appendChild(list);
    }
}

console.log(render([
    {
      name: 'Google',
      url: 'https://google.com'
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com'
    },
    {
      name: 'intocode',
      url: 'https://intocode.ru'
    },
]))