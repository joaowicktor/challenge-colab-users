import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UsersPage from './pages/Users';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={UsersPage} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
