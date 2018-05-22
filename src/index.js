import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

fetch(`${process.env.PUBLIC_URL}/data.json`)
  .then(response => {
    if (response.status >= 400) {
      throw new Error('Bad response from server');
    }
    return response.json();
  })
  .then(data =>
    ReactDOM.render(<App data={data} />, document.getElementById('root'))
  );

registerServiceWorker();
