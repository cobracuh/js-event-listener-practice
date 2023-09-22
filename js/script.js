let button = document.querySelector('.show-cat');

let cat = document.querySelector('.cat');

button.addEventListener('click', function () {
  if (cat.classList.contains('show')) {
    // console.log('Yes');
    button.innerText = 'Wait, come back';
    button.classList.add('disappear');
  } else {
    // console.log('No');
    button.innerText = 'Shoo, cat!!!';
    cat.classList.add('show');
    button.classList.remove('disappear');
  }
});
