import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/astronauts.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
//import api from '../apis/api';
import Login from "../components/Login";

class LoginPage extends React.Component {
/*
  state = {
    loading: true,
    error: null,
    data: undefined,
  };

  //this.authListener = this.authListener.bind(this);

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
*/
  render() {
    /*
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
*/
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <div className="Badges__container">
                <Login />
              </div>

            </div>
          </div>

        </div>
      </React.Fragment>
    );
  }
}

export default LoginPage;
