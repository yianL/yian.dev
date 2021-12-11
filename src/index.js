import React from 'react';
import ReactDOM from 'react-dom';
import { io } from 'socket.io-client';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
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
    console.log(
      "Poking around? Try this: yian.skills.map(s => s.name).join(', ')"
    );
    window.yian = { ...data };
    ReactDOM.render(<App data={data} />, document.getElementById('root'));

    client.emit('greet', data);
  });

registerServiceWorker();
