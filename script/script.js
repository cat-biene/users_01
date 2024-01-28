// Реализуйте форму добавления карточек пользователей. В форме должны быть поля (Имя, Фамилия и Возраст). При отправке формы должна формироваться карточка с данными пользователя в интерфейсе. Дизайн страницы и расположение элементов могут быть произвольными.

const formNode = document.querySelector('.addForm');
const list = [];

formNode.addEventListener('submit', (event) => {
    event.preventDefault();
    const {first, last, age} = event.target;
    const user ={
        first: first.value,
        last: last.value,
        age: +age.value
    };

    list.push(user);
    rerender();
    event.target.reset();
})

function creatUserCard(first, last, age) {
    const conteiner = document.createElement('div');
    const firstNode = document.createElement('p');
    const lastNode = document.createElement('p');
    // const ageNode = document.createElement('p');

    firstNode.innerText = first;
    lastNode.innerText = last;
    // ageNode.innerText = age;

    conteiner.classList.add('item');
    conteiner.append(firstNode, lastNode, /*ageNode*/);
    const bgColors = {
        0: 'azure',
        1: '#98FB98',
        2: '#FFA07A'
    };

    conteiner.style.backgroundColor = bgColors[age];
    return conteiner;
}

function rerender() {
    const conteiner = document.querySelector('#listConteiner');
    conteiner.innerText = '';
    list.forEach(({first, last, age}) => conteiner.append(creatUserCard(first, last, age)));
}





  