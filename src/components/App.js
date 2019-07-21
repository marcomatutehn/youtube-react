import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from '../pages/Home';

import Login from '../pages/Login';
import SignIn from './SignIn';
import requireAuth from "./auth/requireAuth";

import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import NotFound from '../pages/NotFound';



function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/signin" component={SignIn} />

          <Route exact path="/badges" component={requireAuth(Badges)} />
          <Route exact path="/badges/new" component={requireAuth(BadgeNew)} />
          <Route exact path="/badges/:badgeId" component={requireAuth(BadgeDetails)} />
          <Route exact path="/badges/:badgeId/edit" component={requireAuth(BadgeEdit)} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
