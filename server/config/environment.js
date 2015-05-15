'use strict';

var path = require('path');
var _ = require('lodash');

function requiredProcessEnv(name) {
  if(!process.env[name]) {
    throw new Error('You must set the ' + name + ' environment variable');
  }
  return process.env[name];
}

// All configurations will extend these options
// ============================================
var config = {
  env: process.env.NODE_ENV,

  root: path.normalize(__dirname + '/../..'),

  port: process.env.PORT || 9000,

  weatherApiKey: 'cf1af117dffb7db727759f8a1b3743e7',

  secrets: {
    session: 'shhhhhh-its-a-secret'
  },
};

// Export the config object based on the NODE_ENV
// ==============================================
module.exports = config;