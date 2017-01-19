import React, { PropTypes } from 'react';


const Post = function({title}) {
  return (<li>{title}</li>);
};


Post.propTypes = {
  title: PropTypes.string.isRequired
};


export default Post;
