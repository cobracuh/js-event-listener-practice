let button = document.querySelector('.show-cat');

let cat = document.querySelector('.cat');

button.addEventListener('click', function () {
  cat.classList.add('show');
});
