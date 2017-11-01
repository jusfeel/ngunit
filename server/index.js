const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const useragent = require('express-useragent');

var rxjs = require('rxjs');

// server setup
const app = express();

app.use(cors());
app.options('*', cors());
app.use(logger('dev'));
app.use(useragent.express());

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());

// View engine to server static page
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'server/public')));

// Add routes
app.use('/videos', function(req, res, next) {

  const dataSet = ["basketball", "soccer", "boxing", "swimming", "running"];
  res.json({ data: dataSet });

});


// Create HTTP server
const port = process.env.PORT || '3000';
app.set('port', port);
const server = http.createServer(app);
server.listen(port, () => console.log(`API SERVER running on localhost:${port}`));
