import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor(props) {
    super(props);
    console.log('Home Constructor');
  }

  render() {
    return (
      <div>
        <h1>Home page</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/createweapon">CreateWeapon</Link></li>
          <li><Link to="/faq">Faq</Link></li>
        </ul>
      </div>
    );
  }
}

export default Home;
