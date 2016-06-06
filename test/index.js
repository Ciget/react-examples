const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const router = require('./router');
const app = express();
const cors= require('cors');

app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
app.use(cors());
router(app);    
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Start listening on port', port);
