import React from 'react';
import './App.css';

import { CssBaseline } from '@material-ui/core';

import Header from './routes/Header';
import Main from './routes/Main';

const App = () => (
  <div className="App">
    <CssBaseline />
    <Header />
    <Main />
  </div>
);

export default App;
