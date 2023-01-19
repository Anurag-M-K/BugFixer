import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App';
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
import { Provider } from 'react-redux';
import  store from  '../src/redux/store'
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <React.StrictMode>
    <Provider store={store}>

    <App />
    </Provider>
  </React.StrictMode>
)
