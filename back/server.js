//IMPORT PACKAGES
const http = require('http');
const app = require('./app');

// Import dotenv //
const dotenv = require('dotenv');
dotenv.config();

// RETURN PORT 3000//
app.set('port', process.env.PORT || 3000);
const server = http.createServer(app);
server.listen(process.env.PORT || 3000);
console.log(`Listening on port: ${server.address().port}`);

