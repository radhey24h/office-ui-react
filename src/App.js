import React from 'react';
import { Provider } from 'react-redux';

// import logo from './logo.svg';
import './App.css';

/* Web application components */
import Header from './Layout/Header';
import Content from './Layout/Content';
import Footer from './Layout/Footer';


import store from '../src/store';

function App() {
  return (
    <Provider store={store}>
        <div className="main">
          <Header />
          <Content />
          <Footer />
        </div>
        
    </Provider>
  );
}

export default App;
