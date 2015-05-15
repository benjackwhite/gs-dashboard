# Simple Dashboard

A simple dashboard designed with GoSquared in mind. All of the data is served by the NodeJS Express api and other than the weather, it is all mocked data. When the API is hit at `api/stats` some things simply count down and others randomly generate an appropriate value.

The activity pane is polling `api/metrics` regularly with pseudo-random responses to give an idea of what it would look like with proper data. There is all sorts of improvements that could be done around use of Websockets for push functionality instead of polling, data transfer reduction through etags etc. 

Demo available at http://gs.benjackwhite.co.uk

Be sure to refresh the data with the top right button :)



## Installation

Download and run `npm install && bower install`

## Usage

Run using `grunt serve` or `grunt serve:dist` for the minified production version
