// 2.1
const divEmpty = document.createElement('div');
document.body.appendChild(divEmpty);

// 2.2
const divWithP = document.createElement('div');
const pInside = document.createElement('p');
divWithP.appendChild(pInside);
document.body.appendChild(divWithP);

// 2.3
const divLoopP = document.createElement('div');
for (let i = 0; i < 6; i++) {
    const p = document.createElement('p');
    divLoopP.appendChild(p);
}
document.body.appendChild(divLoopP);

// 2.4
const dynamicP = document.createElement('p');
dynamicP.textContent = 'Soy dinámico!';
document.body.appendChild(dynamicP);

// 2.5
const h2Insert = document.querySelector('h2.fn-insert-here');
h2Insert.textContent = 'Wubba Lubba dub dub';

// 2.6
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul = document.createElement('ul');

for (const app of apps) {
    const li = document.createElement('li');
    li.textContent = app;
    ul.appendChild(li);
}
document.body.appendChild(ul);

// 2.7
const nodesToRemove = document.querySelectorAll('.fn-remove-me');
for (const node of nodesToRemove) {
    node.remove();
}

// 2.8
const allDivs = document.querySelectorAll('div');
const pMiddle = document.createElement('p');
pMiddle.textContent = 'Voy en medio!';
document.body.insertBefore(pMiddle, allDivs[1]);

// 2.9
const insertHereDivs = document.querySelectorAll('div.fn-insert-here');
for (const div of insertHereDivs) {
    const pInner = document.createElement('p');
    pInner.textContent = 'Voy dentro!';
    div.appendChild(pInner);
}