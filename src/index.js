import React from 'react';
import ReactDOM from 'react-dom';
import { io } from 'socket.io-client';
import './index.css';
import App from './components/App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { Signature } from './utils/constants';

const client = process.env.NODE_ENV === 'development' ? io(':4000') : io();
client.on('greet', data => {
  console.log('message: ' + data);
});
client.on('connect', () => {
  console.log('Connected. ID: ' + client.id);
});

window.client = client;

fetch(`${process.env.PUBLIC_URL}/data.json`)
  .then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
  .then(data => {
    console.log(Signature, 'color: blue; font-weight: bold');
    console.log("Quick start: yian.skills.map(s => s.name).join(', ')");
    window.yian = { ...data };
    ReactDOM.render(<App data={data} />, document.getElementById('root'));

    client.emit('greet', data);
  });

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
