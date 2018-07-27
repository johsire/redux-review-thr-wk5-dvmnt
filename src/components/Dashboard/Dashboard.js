import React from 'react';
import './Dashboard.css';

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = { input: '' };
  }

  render() {
    return(
      <div className='Dashboard'>
        <input onChange={ e => this.setState({ input: e.target.value }) }/>
        <button onClick={ () => null }>Create List</button>
        <p>{ this.state.input }</p>
      </div>
    );
  }
}

export default Dashboard;
