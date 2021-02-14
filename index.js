'use strict';

const resultBlock = document.querySelector('#result');
const clickMeBtn = document.querySelector('#click-me');
const pageNumber = document.querySelector('#inputNumber');

clickMeBtn.addEventListener('click', () => {
  makeRequest(pageNumber.value);
});

function makeRequest(pageNumber) {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
    success(data) {
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
    },
  });
}