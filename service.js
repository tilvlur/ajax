'use strict';

/*function getImages(pageNumber) {
  return $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`
  )
}*/

function getImages(pageNumber) {
  return axios.get(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`)
      .then((data) => data.data);
}