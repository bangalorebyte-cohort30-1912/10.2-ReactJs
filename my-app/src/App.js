import React from 'react';
import Footer from './components/Footer'
import Header from './components/Header'
import MainBody from './components/MainBody'
import './App.css';

function App() {
  const name = 'jithin'
  let isAuthorised 
  if(name === 'jithin'){
    isAuthorised = true
  }else{
    isAuthorised = false
  }


  return (
    <div>
      <Header name={name} />
      <MainBody name={name} isAuthorised={isAuthorised} />
      <Footer/>
    </div>
  );
}

export default App;
