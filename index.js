'use strict';

const resultBlock = document.querySelector('#result')
const clickMeBtn = document.querySelector('#click-me');

clickMeBtn.addEventListener('click', makeRequest);

let a = 5;
$.ajax('https://repetitora.net/api/JS/Images')
a = 8;
console.log(a);

function makeRequest() {
  console.log('Request has making');
}