import React from 'react';
import SelectedSubredditPostList from '../containers/SelectedSubredditPostList';
import OptionsContainer from '../containers/OptionsContainer';

const Home = ({ title }) => {
  return (
    <div>
      <div className="small-img" />
      <div className="big-img" />
      <div className="svg-img" />
      <OptionsContainer />
      <SelectedSubredditPostList />
    </div>
  );
};


export default Home;
