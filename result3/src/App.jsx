
// import './App.css'

// function App() {
//   const name = "zaffar";
//   const age = 20;
//   const major = "Front-end developer";

//   return (
//    <>
//    <h1>Saya </h1>
//    <p>{name}</p>
//    <p>{age}</p>
//    <p>{major}</p>
//    </>
//   )
// }

// export default App


import { Component } from 'react';
import './App.css'
import Profile from './Profile';
import Header from './Header';
import Footer from './Footer';
import Todolist from './Todolist';

function App() {
  //
  const name = "zaffar";

  return (
   <>
   <Header/>
   <Todolist name = "zaffar"/>
   <Profile name = "zaffar" alamat = "Jakarta" umur = "20"/>
   <img src="https://picsum.photos/500/300" alt="random" />
   <Footer nama = "zaffar"/>
   </>
  )
}

export default App

