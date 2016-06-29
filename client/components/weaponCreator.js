/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';

class WeaponCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: null, attack: null, image: null };
    console.log('WeaponCreator Constructor');
  }

  componentDidMount() {
    // fetch('//localhost:3333/sections/types')
    // .then(r => r.json())
    // .then(j => {
    //   this.setState({ types: j.types.sections });
    // });
  }

  // create(e) {
  //   const weaponName = this.refs.name.value;
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
        <h1>WeaponCreator</h1>
        <form>
          <div className='form-group'>
            <label>Name</label>
            <input className='form-control' ref='weaponName' type='text' />
          </div>
          <div className='form-group'>
            <label>Max Attack</label>
            <input className='form-control' ref='maxAttack' type='text' />
          </div>
          <div className='form-group'>
            <label>Creature Url</label>
            <input className='form-control' ref='image' type='text' />
          </div>
          <button className='btn btn-primary' onClick={this.props.create}>Create</button>
        </form>
      </div>
    );
  }
}

export default WeaponCreator;
