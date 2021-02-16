'use strict';

const imagesBlock = document.querySelector('#result');
const getImagesBtn = document.querySelector('#get-images');
const pageNumber = document.querySelector('#input-number');
const todoListTasks = document.querySelector('#tasks-result');
const addTaskBtn = document.querySelector('#add-task-btn');
const getTasksBtn = document.querySelector('#get-tasks');


getImagesBtn.addEventListener('click', () => {
  getImages(pageNumber.value)
      .then(onReceivedImages);
});

addTaskBtn.addEventListener('click', () => {
  const taskTitle = document.getElementById('add-task').value
  document.getElementById('add-task').value = '';
  createTask(taskTitle)
      .then((resolvedValue) => console.log(resolvedValue));

})

getTasksBtn.addEventListener('click', () => {
  getTasks()
      .then(onReceivedTasks);
});

//FUNCTIONS

function onReceivedImages(images) {
  images.forEach(image => {
    const div = document.createElement('div');
    div.className = 'img-wrapper';
    const img = document.createElement('img');
    img.src = image.original;
    img.alt = 'Image from AJAX-request';
    div.append(img);
    imagesBlock.append(div);
  });

  /*for (let i = 0; i < data.length; i++) {
    let img = document.createElement('img');
    img.src = data[i].original;
    img.alt = 'Image from AJAX-request';
    document.body.append(img);
  }*/
}

function onReceivedTasks(tasks) {
  const ul = document.createElement('ul');
  todoListTasks.append(ul);
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.innerHTML = task.title;
    ul.append(li);
  });
}

/*
//PROMISE

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
  return new Promise(
      (resolve) => setTimeout(() => resolve('done'), seconds * 1000));
}

function hardLoadProcess(loadLevel) {
  return new Promise((resolve) => {
    for (let i = 0; i < loadLevel * 3; i++) {
      console.log(Math.random() * 1000);
    }
    resolve('well done');
  });
}*/
