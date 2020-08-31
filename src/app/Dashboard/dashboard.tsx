import React from 'react';
import './dashboard.css';

const name = 'Vivek Singh';
const route = 'Dashhoard'
const element = <h1>Hello, {name} you are at {route}</h1>;

function Dashboard() {
  return (
    <div className="dashboard">
        {element}
    </div>
  );
}

export default Dashboard;
