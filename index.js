const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './client/views'));
app.use('/public', express.static(process.cwd() + '/public'));

const { NODE_PORT } = require('./server/config/index');

require('./server/config/init')(app, express);

app.listen(NODE_PORT, () => console.log(`Example app listening on port ${NODE_PORT}!`));
