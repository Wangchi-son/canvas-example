import React from 'react';
import { Route } from 'react-router-dom';
import AboutMe from './page/AboutMe';
import Homepage from './page/Homepage';
import Main from './page/Main';
import MyWork from './page/MyWork';
// import Tutorial1 from "./canvas/Tutorial1";

function App() {
  return (
    <>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/aboutme" component={AboutMe} />
      <Route exact path="/mywork" component={MyWork} />
    </>
  );
}

export default App;
