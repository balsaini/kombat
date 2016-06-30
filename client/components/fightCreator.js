/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';

class FightCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null, image: null };
    console.log('FightCreator Constructor');
  }
  // create(e) {
  //   const creatureName = this.refs.name.value;
  //   const maxAttack = this.refs.maxAttack.value;
  //   const weaponUrl = this.refs.image.value;
  //   const body = JSON.stringify({ weaponName, maxAttack, weaponUrl });
  //   console.log(body);
  //   fetch('//localhost:3333/weapon', { method: 'post', body, headers:
  //   { 'Content-Type': 'application/json' } })
  //   .then(r => r.json())
  //   .then(() => this.refresh());
  //
  //   e.preventDefault();
  // }

  render() {
    return (
      <div>
        <h1>Fight Creator</h1>
        <form>
          <div className='form-group'>
            <label>Creature</label>
            <select className='form-control' ref='type'>
              {this.state.types.map((t, i) => <option key={i}>{t}</option>)}
            </select>
          </div>
          <button className='btn btn-primary' onClick={this.props.para1}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreatureCreator;
