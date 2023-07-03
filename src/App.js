import logo from './logo.svg';
import './App.css';
import React, { useContext, useEffect } from 'react';
import NavBar from './NavBar';
import AppRouter from './AppRouter';
import { BrowserRouter } from 'react-router-dom'
import { Context } from '.';

function App() {
  const { user } = useContext(Context)

  useEffect(() => {
    const originalSetItem = localStorage.setItem;
    localStorage.setItem = function (key, value) {
      const event = new Event('itemInserted');

      event.value = value; // Optional..
      event.key = key; // Optional..

      document.dispatchEvent(event);

      originalSetItem.apply(this, arguments);
    };

    const localStorageSetHandler = function (e) {
      console.log(e)
      //  alert('localStorage.set("' + e.key + '", "' + e.value + '") was called');
      if (e.key == 'token') {
        if (e.value != null && e.value != "") {
          //user.setUser(e.value)
          user.setIsAuth(true)
        }
        else {
          //user.setUser(null)
          user.setIsAuth(false)
        }


      }

    };

    document.addEventListener("itemInserted", localStorageSetHandler, false);
  })


  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
