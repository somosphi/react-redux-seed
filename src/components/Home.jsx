import React from 'react';
import SelectedSubredditPostList from '../containers/SelectedSubredditPostList';
import OptionsContainer from '../containers/OptionsContainer';

const Home = function({title}) {
  return (
    <div>
      <OptionsContainer />
      <SelectedSubredditPostList />
    </div>
  );
};


export default Home;
