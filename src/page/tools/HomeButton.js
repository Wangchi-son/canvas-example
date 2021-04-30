import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './css/HomeButton.css';

function HomeButton() {
  useEffect(() => {
    return () => {
      window.location.reload();
    };
  });
  return (
    <Link to="/" id="HomeButton" className="stateWhite1 stateBlack2">
      <AiFillHome />
    </Link>
  );
}

export default HomeButton;
