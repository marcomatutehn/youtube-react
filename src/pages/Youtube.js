import React from 'react';
import youtube from '../apis/youtube';
import './styles/Badges.css';

import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import SearchBar from '../components/SearchBar';
import VideoDetail from '../components/VideoDetail';
import VideoList from '../components/VideoList';
import Clock from 'react-live-clock';


class Youtube extends React.Component {
  state = {
    "videos": [],
    "selectedVideo": null
  }
  handleSubmit = async (termFromSearchBar) => {
    console.log("Is inside handleSubmit")
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

  componentDidUpdate() {
  this.props.handleVideoSelect();
  this.props.handleSubmit();
  }

  /*
  componentDidMount() {
   //this.fetchData();

    //this.intervalId = setInterval(this.fetchData, 5000);
  }

  componentWillUnmount() {
    //clearInterval(this.intervalId);
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

            </div>
          </div>
        </div>

        <div className='ui container' style={{marginTop: '1em'}}>
          <Clock
              format="dddd, MMMM Mo, YYYY, HH:mm:ss"
              ticking={true}
              interval={1000}
          />
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

      </React.Fragment>
    )
  }
}

export default Youtube;
