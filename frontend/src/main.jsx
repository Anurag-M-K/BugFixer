import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import  store from  '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';


let persistor = persistStore(store)
ReactDOM.createRoot(document.getElementById('root')).render(
 

    <Provider store={store}>
     <PersistGate persistor={persistor}>
      <App />
     </PersistGate>
    </Provider>
   
)
