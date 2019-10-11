const express = require('express'),
	app = express(),
	path = __dirname + '/views/',
	ifaces = require('os').networkInterfaces();

app.set('port', process.env.PORT || 5000);
app.use(express.static(__dirname + '/public'));
app.set('views', path);
app.set('view engine', 'ejs');

Object.keys(ifaces).forEach(function(ifname) {
	var alias = 0;

	ifaces[ifname].forEach(function(iface) {
		if ('IPv4' !== iface.family || iface.internal !== false) {
			// skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
			return;
		}

		if (alias >= 1) {
			// this single interface has multiple ipv4 addresses
			console.log(ifname + ':' + alias, iface.address);
		} else {
			// this interface has only one ipv4 adress
			console.log(ifname, iface.address);
		}
		++alias;
	});
});
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
