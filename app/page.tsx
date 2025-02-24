"use client";
import React from 'react';
import { DrawIoEmbed } from 'react-drawio';

const App = () => {
  return (
    <div style={{ backgroundColor: "black", border: "1px solid black", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <h1>react-drawio library Test Project </h1>
      <div style={{ height: "50vh", width: "50%", }}>
        <DrawIoEmbed />
      </div>
    </div>
  );
}

export default App;