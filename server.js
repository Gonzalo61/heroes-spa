//Install express server    
const express = require('express');

const app = express();


/*
const path = require('path');

const app = express();

// Serve only the static files form the dist directory    
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname + '/dist/index.html'));
});

// Start the app by listening on the default Heroku port    
app.listen(process.env.PORT || 8080);
*/



app.use(express.static('./dist/spa'));

app.get('/*', function(req, res) {
    res.sendFile('index.html', { root: 'dist/spa/' });
});

app.listen(process.env.PORT || 8080);