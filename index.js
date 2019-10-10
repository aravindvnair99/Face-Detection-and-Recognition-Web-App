const express = require('express'),
	app = express(),
	path = __dirname + '/views/';

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));
app.set('views', path);
app.set('view engine', 'ejs');
app.listen(app.get('port'), function() {
	console.log('App is running on port', app.get('port'));
});

app.get('/', function(req, res) {
	res.render('index');
});

app.use((req, res, next) => {
	console.log('404');
	res.status(404).send('Error 404 - Not Found Contact Aravind.');
});