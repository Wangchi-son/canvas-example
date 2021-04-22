import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './css/HomeButton.css';

function HomeButton() {
  return (
    <Link to="/" id="HomeButton">
      <AiFillHome />
    </Link>
  );
}

export default HomeButton;
