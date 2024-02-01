// ./src/App.tsx
import React from 'react';
import './App.css'

import Navbar from './Components/Navbar/Navbar';
import { Banner } from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import { originalsUrl, actionUrl, ComedyUrl, horrorUrl, romanceUrl, documentariesUrl } from './Constants/URLs';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner url={originalsUrl}/>
      <RowPost title='Netflix Originals'url={originalsUrl}/>
      <RowPost title='Action' isSmall url={actionUrl}/>
      <RowPost title='Comedy' isSmall url={ComedyUrl}/>
      <RowPost title='Horror' url={horrorUrl}/>
      <RowPost title='Romace' isSmall url={romanceUrl}/>
      <RowPost title='Documentaries' isSmall url={documentariesUrl}/>
    </div>
  );
}

export default App;