import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '../src/Header.css'
import Home from '../src/Home';
import About from '../src/About';

import Projects from '../src/Projects';
import Header1 from '../src/Header1';
import Contacts from '../src/Contacts';


export default function RouteNavigator() {
  return (
    <BrowserRouter>
    <Header1 />
        <div className="contents">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
         <Route path='/contacts' element={<Contacts />}/>
        <Route path='/projects' element={<Projects />} />
      </Routes>
        </div>
    </BrowserRouter>
  );
}
