import React, { useState } from 'react';
import axios from 'axios';
import Footer from '/src/Footer.jsx';
import dotImg from '/images/dot.png'
import barImg from '/images/bar.png';
import shellImg from '/images/shell.png';
import Converter from './converter';


function App() {
return(
<div className='flex flex-col min-h-screen'>
  <Converter/>
  <Footer/>
</div>


);
};

export default App;