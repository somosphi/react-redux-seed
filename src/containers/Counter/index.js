import React from 'react';
import { connect } from 'react-redux';
import { sumValue, subtractValue } from '../../store/counter/actions';

export default function withCounter(WrappedComponent) {
  const mapStateToProps = state => ({
    counter: state.counter,
    loading: state.loading,
  });

  const mapDispatchToProps = dispatch => ({
    sum: value => dispatch(sumValue(value)),
    subtract: value => dispatch(subtractValue(value)),
  });

  const Counter = props => (<WrappedComponent {...props} />);

  return connect(mapStateToProps, mapDispatchToProps)(Counter);
}
