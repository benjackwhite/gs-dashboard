//Dummy data generator

var dummyMetrics = [];
var averager = 500;

var UserMetric = function(props) {
	this.timestamp = Date.now();
	this.usersOnline = props.usersOnline || null;
}


var addToDummyMetricsAndSetTimeout = function(){
	var newValue = (dummyMetrics[dummyMetrics.length - 1]) 
		? dummyMetrics[dummyMetrics.length - 1].usersOnline + Math.floor((Math.random() * 1000 - averager))
	 	: 13402;


	 var newMetric = new UserMetric({
			usersOnline: newValue
		});
	dummyMetrics.push(newMetric);

	if(newValue < 5000) averager = 0;
	else if(newValue > 20000) averager = 700;
	else averager = 500;

	if(dummyMetrics.length > 200) dummyMetrics.splice(0,1);

 	setTimeout(addToDummyMetricsAndSetTimeout, 1000);
}



addToDummyMetricsAndSetTimeout();

exports.get = function() {
	return dummyMetrics;
}