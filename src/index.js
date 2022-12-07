/* eslint-disable no-unused-vars */
import _, { constant } from 'lodash';
import './style.css';

const todo = [
  {
    id: 0,
    completed: 'false',
    description: 'Wash the dishes',
  },
  {
    id: 1,
    completed: 'false',
    description: 'complete To Do list project',
  },
  {
    id: 2,
    completed: 'false',
    description: 'finish al microverse projects',
  },

];

function list() {
  const element = document.createElement('div');
  element.innerHTML = `
    <h1>
      Today's To Do
    </h1>
    <p>
      <input type="text" id="add" heigth="100%" placeholder="Add to your list...">
    </p>
    <ul id="list">
    </ul>
    <a id="clear">
      Clear all completed
    </a>
    `;
  return element;
}

document.body.appendChild(list());

const tasks = document.getElementById('list');

const input = document.getElementById('add');

for (let i = 0; i < todo.length; i += 1) {
  const todoData = `
  <li id="${todo[i].id}">
    <label><input type="checkbox">${todo[i].description}</label>
  </li>
      `;
  tasks.innerHTML += todoData;
}
