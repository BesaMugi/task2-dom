const list = document.createElement('ul');

function render (arr) {
    for(i = 0; i < arr.length; i++){
        const li = document.createElement('li');
        li.textContent = arr[i];
        list.append(li);
    };
};
document.body.appendChild(list);

console.log(render(["html", "css", "js"]))