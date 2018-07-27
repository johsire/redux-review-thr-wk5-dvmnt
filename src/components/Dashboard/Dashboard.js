
import React from 'react';
import './Dashboard.css';

import { connect } from 'react-redux';
import { addList, deleteList } from '../../ducks/reducer';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { input: '' };
    this.sendListToRedux = this.sendListToRedux.bind(this);
  }

  sendListToRedux() {
    this.props.ourAddList(this.state.input);
  }

  render() {
    return(
      <div className='Dashboard'>
        <input onChange={ e => this.setState({ input: e.target.value }) }/>
        <button onClick={ () => this.props.ourAddList(this.state.input) }>Create List</button>
        <button onClick={ () => this.props.ourDeleteList(this.state.input) }>Delete List</button>
        <p>{ this.props.myName }</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { myLists: state.lists };
}

export default connect(mapStateToProps, { ourAddList: addList, ourDeleteList: deleteList })(Dashboard);