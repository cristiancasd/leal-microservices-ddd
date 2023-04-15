
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { HashRouter } from "react-router-dom";
import { App } from './App';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  //<React.StrictMode>
  <Provider store={store}>
  {
    //<BrowserRouter> 
  }
  <HashRouter>        
    <App />
  </HashRouter>
  {
    //</BrowserRouter>
  }
</Provider> 
//</React.StrictMode>
)