import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Users from './components/Users';
import Profile from './components/Profile';


const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route exact path="/">
        <App />
      </Route>
      <Route exact path="/users">
        <Users />
      </Route>
      <Route path="/users/:userId">
        <Profile />
      </Route>
    </BrowserRouter>
  </React.StrictMode>
);
