import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main/Main';

const Routes = props => (
  <BrowserRouter>
    <React.Fragment>
      <Switch>
        <Route path="" component={Main} />
      </Switch>
    </React.Fragment>
  </BrowserRouter>
);

export default Routes;
