import React from 'react';
import { Link } from 'react-router';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App Constructor');
  }

  render() {
    return (
      <div>
        <h1>Kombat</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/createweapon">Create Weapon</Link></li>
          <li><Link to="/createcreature">Create Creature</Link></li>
          <li><Link to="/faq">Faq</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
