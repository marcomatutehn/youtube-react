import React, { Component }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignIn from './Login';
import Youtube from '../pages/Youtube';
import Badges from '../pages/Badges';
import BadgeNew from '../pages/BadgeNew';
import BadgeDetails from '../pages/BadgeDetailsContainer';
import BadgeEdit from '../pages/BadgeEdit';
import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import SearchBar from "./SearchBar";
import requireAuth from "./auth/requireAuth";
import NotFound from '../pages/NotFound';
import { fetchUser } from "./actions";
import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>

              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/signin" component={SignIn}/>

              <Route  path="/badges" component={requireAuth(Badges)}/>

              <Route  path="/youtube" component={Youtube}/>
              <Route  path="/player" component={VideoItem}/>
              <Route  path="/result" component={VideoDetail}/>
              <Route  path="/table" component={VideoList}/>
              <Route  path="/search" component={SearchBar}/>

              <Route  path="/badges/new" component={requireAuth(BadgeNew)}/>
              <Route  path="/badges/:badgeId" component={requireAuth(BadgeDetails)}/>
              <Route  path="/badges/:badgeId/edit" component={requireAuth(BadgeEdit)}/>
              <Route component={NotFound}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
