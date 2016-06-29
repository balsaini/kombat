/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const weaponSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  maxAttack: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Weapon', weaponSchema);
