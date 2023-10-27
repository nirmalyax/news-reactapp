//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import React from 'react';

function App() {
  return (
    <BrowserRouter className=''>
                <Navbar home="HOME " about="ABOUT " news="NEWS-CATEGORIES "/>
                <Routes>
                    <Route exact path="/" element={<Hero />} />
                    <Route exact path='/About' element={<About/>}/>
                </Routes>
                <Footer/>
        </BrowserRouter>
  );
};

export default App;

