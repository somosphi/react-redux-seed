import { Link } from 'react-router';
import React, { PropTypes } from 'react';

const Test = function({title}) {
  return (
    <div>
      <p>Test Page</p>
      <p>
        <Link to=''/>
      </p>
    </div>);
};


Test.propTypes = {
  title: PropTypes.string.isRequired
};


export default Test;
