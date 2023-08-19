const firstName = 'Dar';
const age = 'xx';
console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js');

header.innerHTML = 'Hello World!!';

console.log(header.style);

header.style.color = 'red';

const paragraph = document.querySelector('.paragraph--js');

paragraph.innerHTML = 'Treść paragrafu wstawiona z JS';

