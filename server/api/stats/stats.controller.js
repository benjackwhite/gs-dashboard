'use strict';

var _ = require('lodash');
var mockModel = require('./stats.model.js');

// Get list of statss
exports.index = function(req, res) {
  res.json(mockModel.get());
};

exports.temperature = function(req, res) {
	res.json(mockModel.get('temperature'));
}
exports.plants = function(req, res) {
	res.json(mockModel.get('plants'));
}
exports.weather = function(req, res) {
	res.json(mockModel.get('weather'));
}
exports.fridge = function(req, res) {
	res.json(mockModel.get('fridge'));
}
exports.twitter = function(req, res) {
	res.json(mockModel.get('twitter'));
}
