// import React from 'react';
//
// export default () => <h1>hello world</h1>;
/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';
import WeaponCreator from './weaponCreator';
// import Weapon from './weapon';

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App Constructor');
    // this.state = { sections: [] };
    this.create = this.create.bind(this);
    // this.refresh = this.refresh.bind(this);
  }

  // componentDidMount() {
  //   this.refresh();
  // }
  //
  // refresh() {
  //   fetch('//localhost:3333/sections')
  //   .then(r => r.json())
  //   .then(j => {
  //     this.setState({ sections: j.sections });
  //   });
  // }
  //
  // create(e) {
  //   const weaponName = this.refs.weapon.refs.name.value;
  //   const maxAttack = this.refs.weapon.refs.maxAttack.value;
  //   const weaponUrl = this.refs.weapon.refs.image.value;
  //   const body = JSON.stringify({ weaponName, maxAttack, weaponUrl });
  //
  //   // fetch('//localhost:3333/weapons', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
  //   // .then(r => r.json())
  //   // .then(() => this.refresh());
  //
  //   e.preventDefault();
  // }
  create(e) {
    const weaponName = this.refs.weapon.refs.weaponName.value;
    const maxAttack = this.refs.weapon.refs.maxAttack.value;
    const weaponUrl = this.refs.weapon.refs.image.value;
    const body = JSON.stringify({ name: weaponName, maxAttack, image: weaponUrl });
    console.log(body);
    fetch('//localhost:3333/weapon', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then(() => console.log('Executed Fetch'));

    e.preventDefault();
  }

  render() {
    return (
      <div>
        <div className='weaponCreate'>
          <div className='col-xs-8'>
            <WeaponCreator ref='weapon' create={this.create} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
