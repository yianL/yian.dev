import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { Signature } from './utils/constants';

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
      "Poking around? Be my guest. Try this: yian.interests.join(',')"
    );
    window.yian = { ...data };
    ReactDOM.render(<App data={data} />, document.getElementById('root'));
  });

registerServiceWorker();
