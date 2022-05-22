
const container = document.getElementById('container');

const info = document.createElement('div');
const head = document.createElement('div');
head.setAttribute('class', 'head');

const title = document.createElement('div');
title.setAttribute('id', 'title');

const locationDiv = document.createElement('div');
const location = document.createElement('h3');
const hoursDiv = document.createElement('div');
const hours = document.createElement('h3');

container.appendChild(head);
container.appendChild(info);

head.appendChild(title);

info.appendChild(locationDiv);
info.appendChild(hoursDiv);

locationDiv.appendChild(location);
hoursDiv.appendChild(hours);
console.log(title);