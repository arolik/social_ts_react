import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'antd/dist/antd.css'
import App from './App';
import { Provider } from 'react-redux';
import mainStore from './store/SocialStore';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <BrowserRouter>
      <Provider store={mainStore} >
        <App />
        </Provider>
    </BrowserRouter>

);


