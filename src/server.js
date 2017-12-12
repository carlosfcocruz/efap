const express = require('express');
const app = express();

const homeHandler = require('./server/handlers/homepage');
const { NODE_PORT } = require('./server/config');
require('./server/config/init')(app, express);

app.get('/', homeHandler);

app.listen(NODE_PORT, () => console.log(`Example app listening on port ${NODE_PORT}!`));