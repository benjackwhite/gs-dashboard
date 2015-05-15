var config = require('../../config/environment');
var request = require('request');

var tWeatherCheck;
var weatherData;
var mockWeatherData = {"coord":{"lon":-0.13,"lat":51.51},"sys":{"message":0.0151,"country":"GB","sunrise":1431576577,"sunset":1431632704},"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"base":"stations","main":{"temp":11,"temp_min":11,"temp_max":11,"pressure":1015.61,"sea_level":1023.58,"grnd_level":1015.61,"humidity":100},"wind":{"speed":0.92,"deg":59.5019},"rain":{"3h":2},"clouds":{"all":92},"dt":1431629609,"id":2643743,"name":"London","cod":200};
var beersInStock = 10;
var twitterFollowerCount = 3201;
var daysTillWater = 5;

// Mock data generator
var generateMockData = function() {
	twitterFollowerCount += Math.floor(Math.random() * 10);

	beersInStock--;
	if(beersInStock < 0) beersInStock = 10;

	daysTillWater--;
	if(daysTillWater < 0) daysTillWater = 5;

	return {
		temperature: {
			temperature: Math.round(Math.random() * 3 + 19)
		},
		plants: {
			daysTillWater: daysTillWater
		},
		weather: weatherData,
		fridge: {
			beerCount: beersInStock
		},
		twitter: {
			count: {
				today: Math.round(Math.random() * 20 + 40),
				week: Math.round(Math.random() * 60 + 300),
				month: Math.round(Math.random() * 200 + 1200)
			},
			followers: twitterFollowerCount
		}
	}
};

var getRealWeatherDataAndSetTimeout = function() {
	var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=' + config.weatherApiKey;

	request(apiUrl, function (error, response, body) {

		tWeatherCheck = setTimeout(getRealWeatherDataAndSetTimeout, 3600000);

		if(error || response.statusCode != 200)
		{
			console.log('Error communicating with Weather API: ', error);

			//Insert Mock data for now
			weatherData = mockWeatherData;
			return;
		}

		try {
		    weatherData = JSON.parse(body);
		    weatherData.main.temp = Math.round(weatherData.main.temp - 273.15);
		    weatherData.main.temp_max = Math.round(weatherData.main.temp_max - 273.15);
		    weatherData.main.temp_min = Math.round(weatherData.main.temp_min - 273.15);
		}
		catch(e) {
			console.log('Error parsing Weather API response: ', e);
			weatherData = mockWeatherData;

		}

	    return;
	});
}

getRealWeatherDataAndSetTimeout();

exports.get = function(value) {

	return (value) ? generateMockData()[value] : generateMockData();
}