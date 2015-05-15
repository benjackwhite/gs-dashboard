'use strict';

var _ = require('lodash');

var mockModel = require('./metrics.model.js');

// Get list of metricss
exports.index = function(req, res) {
  res.json(mockModel.get());
};