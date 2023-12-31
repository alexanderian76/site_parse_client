import ReactDOM from 'react-dom/client';
import React, { createContext } from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import HeightStore from './store/HeightStore'
import { hydrate, render } from "react-dom";
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
      navbarHeight: new HeightStore(),
      user: new UserStore()
      }}>
      <App/>
    </Context.Provider>
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
