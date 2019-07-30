import React, { Component }  from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Login';
import Layout from './Layout';

import VideoItem from "./VideoItem";
import VideoDetail from "./VideoDetail";
import VideoList from "./VideoList";
import requireAuth from "./auth/requireAuth";

import NotFound from '../pages/NotFound';
import { fetchUser } from "./actions";
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import Youtube from '../pages/Youtube';
import SearchBar from "./SearchBar";

//import youtube from '../apis/youtube';

import { connect } from "react-redux";

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  //How to implement Security
  //<Route  path="/badges/new" component={requireAuth(BadgeNew)}/>

  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={LoginPage}/>
              <Route exact path="/signin" component={SignIn}/>
              <Route  path="/youtube" component={requireAuth(Youtube)}/>
              <Route  path="/item" component={VideoItem}/>
              <Route  path="/detail" component={VideoDetail}/>
              <Route  path="/list" component={VideoList}/>
              <Route  path="/search" component={SearchBar}/>
              <Route component={NotFound}/>
            </Switch>
          </Layout>
        </BrowserRouter>
    );
  }
}

export default connect(null, { fetchUser })(App);
