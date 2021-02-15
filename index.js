'use strict';

const resultBlock = document.querySelector('#result');
const clickMeBtn = document.querySelector('#click-me');
const pageNumber = document.querySelector('#inputNumber');

clickMeBtn.addEventListener('click', () => {
  getImages(pageNumber.value, renderImages);
});

doItAfter(2)
    .then((daneMessage) => setTimeout(() => console.log(`Hey-Hey ${daneMessage}`), 10))
    .then(() => setTimeout(() => console.log('Hello!'), 4000));

hardLoadProcess(1)
    .then((dane) => console.log(dane));

let promise = new Promise((resolve) => {
  setTimeout(() => resolve('done-done'), 1000);
});

promise.then((result) => console.log(result));

//FUNCTIONS

function doItAfter(seconds) {
  return new Promise((resolve) => setTimeout(() => resolve('done'), seconds * 1000));
}

function hardLoadProcess(loadLevel) {
  return new Promise((resolve) => {
    for (let i = 0; i < loadLevel * 3; i++) {
      console.log(Math.random() * 1000);
    }
    resolve('well done');
  });

}

function renderImages(data) {
  data.forEach(el => {
    let img = document.createElement('img');
    img.src = el.original;
    img.alt = 'Image from AJAX-request';
    resultBlock.append(img);
  });

  /*for (let i = 0; i < data.length; i++) {
    let img = document.createElement('img');
    img.src = data[i].original;
    img.alt = 'Image from AJAX-request';
    document.body.append(img);
  }*/
}