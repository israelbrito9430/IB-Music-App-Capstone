import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebaseConfig from './firebase-config';
import {FirebaseAppProvider} from 'reactfire';

ReactDOM.render(
  <React.StrictMode>
        <FirebaseAppProvider firebaseConfig={firebaseConfig}>
          <Suspense fallback={'Conecting App...'} > 
            <App />
          </Suspense>
        </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();