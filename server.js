var express = require('express'),
    app = express(),
	router = express.Router(),
    port = process.env.PORT || 3000,
    bodyParser = require('body-parser'),
    controller = require('./controller');
	
	var cache = {};
	module.exports = app;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./routes');
routes(app);


router.get('/', (req,res) => {
  res.send('OK'); // Sends HTTP status code 200
});

router.all('*',(req,res) => {
  res.status(404).send('404 Invalid Request');
});

app.use('/',router);


app.listen(port);
console.log('Create RESTFUL API Server Started on: ' + port);