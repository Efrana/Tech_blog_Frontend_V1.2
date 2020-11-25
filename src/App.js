import React from 'react';
import { BrowserRouter, Switch, Route,withRouter } from 'react-router-dom';
import BaseLayout from './components/ModuleLayout/BaseLayout';

function App() {
  return (
      <BrowserRouter> 
      <switch>
      <Route path="/" component={BaseLayout} />
      </switch>
          {/* <BaseLayout/> */}
      </BrowserRouter> 
    
  );
}

export default withRouter(App);
