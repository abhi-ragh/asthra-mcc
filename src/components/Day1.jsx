import React from 'react';
import { Link } from 'react-router-dom';

const Day1 = () => {
  return (
    <div>
      <h1>Day 1 Programs</h1>
      <ul>
        <li><Link to="/program/1">Program 1</Link></li>
        <li><Link to="/program/2">Program 2</Link></li>
      </ul>
    </div>
  );
};

export default Day1;