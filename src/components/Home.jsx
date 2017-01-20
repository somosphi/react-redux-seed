import React from 'react';
import SelectedSubredditPostList from '../containers/SelectedSubredditPostList';
import OptionsContainer from '../containers/OptionsContainer';

const Home = function({title}) {
  return (
    <div>
      <div className="small-img"></div>
      <div className="big-img"></div>
      <div className="svg-img"></div>
      <OptionsContainer />
      <SelectedSubredditPostList />
    </div>
  );
};


export default Home;
