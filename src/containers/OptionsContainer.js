import { connect } from 'react-redux';
import Options from '../components/Options';
import {selectSubreddit, addSubreddit, fetchPosts} from '../actions';


function mapStateToProps(state) {
  return {
    subreddits: state.subreddits,
    selectedSubreddit: state.selectedSubreddit
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddSubreddit: (subreddit) => {
      dispatch(addSubreddit(subreddit));
    },
    onChangeSubreddit: (subreddit) => {
      dispatch(selectSubreddit(subreddit));
      dispatch(fetchPosts(subreddit));
    }
  }
}

const OptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options)

export default OptionsContainer
