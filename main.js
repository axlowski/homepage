const firstName = 'Daro';
const age = 43;
console.log(firstName);
console.log(age);
console.log(`Nazywam się ${firstName} i mam ${age} lat`);

const header = document.querySelector('.page-header__heading--js');
header.innerHTML = 'Hej!';

console.log(header.style)

header.style.color = 'red';
