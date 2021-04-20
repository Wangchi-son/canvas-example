import React from 'react';
import './css/Main.css';
import Puppy from '../static/images/puppy.png';
import styled from 'styled-components';

const Img = styled.img`
  width: 100px;
`;

function Main() {
  return (
    <div id="mainPage">
      <Img src={Puppy} alt="me"></Img>
      <h1 id="mainTitle">hello</h1>
    </div>
  );
}

export default Main;
