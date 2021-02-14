'use strict';

const resultBlock = document.querySelector('#result');
const clickMeBtn = document.querySelector('#click-me');

clickMeBtn.addEventListener('click', makeRequest);

let a = 5;
$.ajax('https://repetitora.net/api/JS/Images', {
  success(data) {
    data.forEach(el => {
      let img = document.createElement('img');
      img.src = el.original;
      img.alt = 'Image from AJAX-request';
      document.body.append(img);
    });

    for (let i = 0; i < data.length; i++) {
      let img = document.createElement('img');
      img.src = data[i].original;
      img.alt = 'Image from AJAX-request';
      document.body.append(img);
    }
  },
});
a = 8;
console.log(a);

function makeRequest() {
  console.log('Request has making');
}