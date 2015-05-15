'use strict';

angular.module('gosquaredApp')

.factory('Metrics', function($resource){
	return $resource('/api/metrics/:metricId', {
		metricId:'@id'
	},
	{
		query: {method:'GET',isArray:true}
	});
})

.factory('Stats', function($resource){
	return $resource('/api/stats/:statId', {
		statId:'@id'
	});
})

.controller('MainCtrl', function($scope, $http, $interval, Metrics, Stats) {

    $scope.metrics = [];
    $scope.stats = {};
    $scope.isRefreshingMetrics = false;
    $scope.isRefreshingStats = false;

    $scope.weatherIcon = 'refresh fa-spin';

    $scope.triggerRefresh = function() {
        reloadData();
    };

    var reloadData = function() {

        $scope.isRefreshingMetrics = true;
        $scope.isRefreshingStats = true;
        // This would be better done via WebSockets to get real-time pushes 
        // but for the purpose of this exercise it is driven by an API endpoint

        refreshMetrics();
        refreshStats();
    }

    var refreshMetrics = function(cb) {
    	$scope.metricsPromise = Metrics.query(function(data){
        	$scope.isRefreshingMetrics = false;
            $scope.metrics = data;
            if(typeof cb === 'function') cb();
		});
    }

    var refreshStats = function(cb) {
    	$scope.statsPromise = Stats.get(function(data){
            $scope.isRefreshingStats = false;
            $scope.stats = data;
            if(typeof cb === 'function') cb();
        });
    }

    $scope.$watch('stats', function(newData) {
    	//Subset of weather codes reported by open weather api - http://openweathermap.org/weather-conditions
    	// NB - Will almost always default to cloud as location is London, UK....

    	if(!newData || !newData.weather) return;

    	var code = newData.weather.weather[0].id

    	if(code == 801 ||  code == 802 || code >= 950) $scope.weatherIcon = 'sun-o';
    	else if(code >= 300 &&  code >= 900) $scope.weatherIcon = 'bolt';
    	else $scope.weatherIcon = 'cloud';

    });

    $interval(refreshMetrics, 1000);

    reloadData();

});
