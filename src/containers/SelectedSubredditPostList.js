import { connect } from 'react-redux';
import PostList from '../components/PostList/index.jsx';

function getPostsBySubreddit(selectedSubreddit, postsBySubreddit) {
  return postsBySubreddit[selectedSubreddit];
}

function mapStateToProps(state) {
  return {
    data: getPostsBySubreddit(state.selectedSubreddit, state.postsBySubreddit),
  };
}

const SelectedSubredditPostList = connect(mapStateToProps)(PostList);

export default SelectedSubredditPostList;
