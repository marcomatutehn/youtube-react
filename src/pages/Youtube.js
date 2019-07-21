import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import api from '../modules/apis/api';
import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import youtube from '../modules/apis/youtube';
import VideoList from '../components/VideoList';

class Youtube extends React.Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
    videos: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.fetchData();

    this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get('/search', {
      params: {
        q: termFromSearchBar
      }
    })
    this.setState({
      videos: response.data.items
    })
  };
  handleVideoSelect = (video) => {
    this.setState({selectedVideo: video})
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

  render() {
    if (this.state.loading === true && !this.state.data) {
      return <PageLoading />;
    }

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
          <div className='ui container' style={{marginTop: '1em'}}>
            <SearchBar handleFormSubmit={this.handleSubmit}/>
            <div className='ui grid'>
              <div className="ui row">
                <div className="eleven wide column">
                  <VideoDetail video={this.state.selectedVideo}/>
                </div>
                <div className="five wide column">
                  <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Youtube;
