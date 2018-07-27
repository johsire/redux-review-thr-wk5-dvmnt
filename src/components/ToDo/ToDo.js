import React, { Component } from 'react';
import { connect } from 'react-redux';

class ToDo extends Component {
  render() {
    return(
      <p>{ this.props.myName }</p>
    )
  }
}

function mapStateToProps(state) { 
  return { myName: state.name } 
};
export default connect(mapStateToProps)(ToDo);
