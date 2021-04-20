import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './page/Homepage';
import Main from './page/Main';
// import Tutorial1 from "./canvas/Tutorial1";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/main" component={Main} />
    </>
  );
}

export default App;
