const list = document.createElement('ul');

let arr = ["html", "css", "js"];

for(i = 0; i < arr.length; i++){
    const li = document.createElement('li');
    li.textContent = arr[i];
    list.append(li);
};

document.body.appendChild(list);