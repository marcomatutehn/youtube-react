import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../modules/apis/api';

class Badges extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  componentDidMount() {
    //Charge API REQUEST when the user open component
    this.fetchData();

    //Help to solve when user access to the next component before timeout finish
    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    //Destroy the component
    clearInterval(this.intervalId);
  }

  //Charga component as asyncroni
  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      //Call the API to consume Resourcers and wait untill it responses
      const data = await api.badges.list();
      //Set the Loading State as False and put data
      this.setState({ loading: false, data: data });
    } catch (error) {
      //Set the Loading State as False and show error
      this.setState({ loading: false, error: error });
    }
  };

  render() {
    //Carga el componentDidMount
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }
    //Carga el estado de error en UpdateDidMount
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img
                className="Badges_conf-logo"
                src={confLogo}
                alt="Conf Logo"
              />
            </div>
          </div>
        </div>

        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>

          <BadgesList badges={this.state.data} />

          {this.state.loading && <MiniLoader />}
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
