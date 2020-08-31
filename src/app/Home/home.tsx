import React from 'react';
import './home.css';

const name = 'Vivek Singh';
const route = 'Home'
const element = <h1>Hello, {name} you are at {route}</h1>;

function Home() {
  return (
    <div className="dashboard">
        {element}
    </div>
  );
}

export default Home;
