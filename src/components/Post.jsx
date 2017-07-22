import React, { PropTypes } from 'react';

const Post = ({ postInfo }) => {
  return (
    <li>
      <a href={`//reddit.com${postInfo.permalink}`} title={postInfo.title} target="_blank">
        <img src={postInfo.thumbnail} className="thumbnail" />
        <span>{postInfo.title}</span>
      </a>
    </li>
  );
};

Post.propTypes = {
  postInfo: PropTypes.object.isRequired,
};
export default Post;
