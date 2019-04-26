const Sequelize = require('sequelize');
const db = require('./database');

const StudentAnswer = db.define('studentAnswer', {
  mood: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  comment: {
    type: Sequelize.TEXT,
    allowNull: true,
  },
  timestamp: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
});

module.exports = StudentAnswer;
