"use client";
import React from 'react';
import { DrawIoEmbed } from 'react-drawio';
import { testdiagram } from './contant/testdiagram';

const App = () => {
  return (
    <div style={{ backgroundColor: "gray", border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1 className='text-4xl font-bold'>react-drawio library </h1>
      <div style={{ height: "80vh", width: "80%", }}>
        <DrawIoEmbed xml={testdiagram} />
      </div>
    </div>
  );
}

export default App;