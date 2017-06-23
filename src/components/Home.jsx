import React from 'react';
import SelectedSubredditPostList from '../containers/SelectedSubredditPostList';
import OptionsContainer from '../containers/OptionsContainer';
import Navbar from './Navbar.jsx';

const Home = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <div className="well img-container">
        <div>
          <div className="big-img" />
          <div className="text-center">Big image</div>
        </div>
        <div>
          <div className="svg-img" />
          <div className="text-center">SVG image</div>
        </div>
        <div>
          <div className="small-img" />
          <div className="text-center">Small image</div>
        </div>
      </div>
      <div className="well">
        <OptionsContainer />
        <SelectedSubredditPostList />
      </div>
    </div>
  );
};


export default Home;
