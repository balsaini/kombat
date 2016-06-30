import App from './components/App';
import CreateWeaponApp from './components/CreateWeaponApp';
import CreateCreatureApp from './components/CreateCreatureApp';
import Faq from './components/Faq';
import Home from './components/Home';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="createweapon" component={CreateWeaponApp} />
      <Route path="createcreature" component={CreateCreatureApp} />
      <Route path="faq" component={Faq} />
    </Route>
  </Router>
 , document.getElementById('root'));
