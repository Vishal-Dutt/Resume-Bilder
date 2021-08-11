import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider, getFirebase } from 'react-redux-firebase';
import { createFirestoreInstance } from 'redux-firestore';
import { composeWithDevTools } from 'redux-devtools-extension'


var firebaseConfig = {
  apiKey: "AIzaSyAJZFtZD5RACvyb83rsMmPW88JFjr6pRRs",
  authDomain: "resume-builder-8539c.firebaseapp.com",
  projectId: "resume-builder-8539c",
  storageBucket: "resume-builder-8539c.appspot.com",
  messagingSenderId: "171701574582",
  appId: "1:171701574582:web:845da199af18e00ed3ff17"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore()

// creating reduxstore
const reduxStore = createStore(rootReducer,
  composeWithDevTools(
    // using thunk as middleware passing extra arguments to instance of getFirebase and getFirestore other than dispatch
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reduxFirestore(firebase) // redux bindings for firestore,
    // getFirestore fucntiion to run reduxFirestore(firebase) dependency is required.
  )
);

ReactDOM.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <ReactReduxFirebaseProvider
        // firebase and firestore instance is created under redux store
        firebase={firebase}
        config={firebaseConfig}
        dispatch={reduxStore.dispatch}
        createFirestoreInstance={createFirestoreInstance}
      >
        <App />
      </ReactReduxFirebaseProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);