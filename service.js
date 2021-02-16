'use strict';

/*function getImages(pageNumber) {
  return $.ajax(`https://repetitora.net/api/JS/Images?page=${pageNumber}&count=1`
  )
}*/

function getImages(pageNumber) {
  return axios.get(
      `https://repetitora.net/api/JS/Images?page=${pageNumber}&count=3`)
      .then(resolvedValue => resolvedValue.data);
}

function createTask(title) {
  return axios.post(`https://repetitora.net/api/JS/Tasks?widgetId=333223&title=${title}`)
      .then(resolvedValue => resolvedValue);
}

function getTasks() {
  return axios.get(`https://repetitora.net/api/JS/Tasks?widgetId=333223`)
      .then(resolvedValue => resolvedValue.data);
}
