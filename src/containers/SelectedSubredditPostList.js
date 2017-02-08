import { connect } from 'react-redux';
import PostList from '../components/PostList';

function getPostsBySubreddit(selectedSubreddit, postsBySubreddit) {
  return postsBySubreddit[selectedSubreddit];
}

function mapStateToProps(state) {
  return {
    data: getPostsBySubreddit(state.selectedSubreddit, state.postsBySubreddit)
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

const SelectedSubredditPostList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostList)

export default SelectedSubredditPostList
