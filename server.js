'use-strict'
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 9696;
var Firebase = require('firebase');
var twilio = require('twilio');
var firebaseRef = new Firebase('https://text-support-zg.firebaseio.com/numbers');
var client = new twilio.RestClient('ACe10095f42407cfa6fb743bb73dc9ed74','a0afafc61ee17a33d4689a6d57d01d31');

app.use(express.static(_dirname + "/public"));

app.use(bodyParser())