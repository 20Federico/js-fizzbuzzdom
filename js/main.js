
const body = document.querySelector('body');
body.style.backgroundColor = '#083B4C';
const main = document.querySelector('main');

const container = document.createElement('div');
container.classList.add('container', 'd-flex', 'flex-wrap', 'gap-3', 'pb-5'); 

const h1 = document.createElement('h1');
h1.textContent = 'FizzBuzzDOM';
h1.classList.add('text-center', 'text-white', 'p-5');

main.append(h1);
main.append(container);

for (let i = 1; i <= 100; i++) {
  
  const box = document.createElement('div');
  box.classList.add('ratio', 'ratio-1x1');
  box.style.width = 'calc(100% / 7 - 15px)';
  box.style.position = 'relative';
  
  const text = document.createElement('div');
  text.classList.add('d-flex', 'justify-content-center', 'align-items-center', 'fs-3', 'p-3');
  text.style.position = 'absolute';
  

  if ((i % 3 === 0) && (i % 5 === 0)) {
    text.style.backgroundColor = '#F0466F';
    text.textContent = 'fizzbuzz';
  } else if (i % 5 === 0) {
    text.style.backgroundColor = '#FFD166';
    text.textContent = 'buzz';
  } else if (i % 3 === 0) {
    text.style.backgroundColor = '#0BD6A1';
    text.textContent = 'fizz';
  } else {
    text.style.backgroundColor = '#1389B2';
    text.textContent = i;
  }

  container.append(box);
  box.append(text);
  };

