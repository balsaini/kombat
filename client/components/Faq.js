import React from 'react';
import { Link } from 'react-router';

class Faq extends React.Component {
  constructor(props) {
    super(props);
    console.log('Faq Constructor');
  }

  render() {
    return (
      <div>
        <h1>FAQ page</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/faq">Faq</Link></li>
        </ul>
      </div>
    );
  }
}

export default Faq;
