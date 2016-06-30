/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';

class CreatureCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null, image: null };
    console.log('CreatureCreator Constructor');
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
        <h1>CreatureCreator</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='creatureName' type='text' />
          </div>
          <div className='form-group'>
            <label>Creature Url</label>
            <input className='form-control' ref='image' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.props.para1}>Create</button>
        </form>
      </div>
    );
  }
}

export default CreatureCreator;
