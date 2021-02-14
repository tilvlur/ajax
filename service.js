'use strict';

function getImages(pageNumber, success) {
  $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`, {
    success,
  });
}