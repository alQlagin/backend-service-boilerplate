const sequelize = require('sequelize');
const {SAMPLE_C_1, SAMPLE_C_2} = require('../constants/');


const Sample = module.exports = sequelize.define('sample', {
  title: Sequelize.STRING,
  description: Sequelize.TEXT,
  status: Sequelize.ENUM(SAMPLE_C_1, SAMPLE_C_2)
});

