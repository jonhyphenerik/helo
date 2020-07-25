const express = require('express');
// const session = require('session');
const app = express();
const massive = require('massive');
const ctrl = require('./controller');
require('dotenv').config();

const {SERVER_PORT, CONNECTION_STRING} = process.env;
// process.env.NODE_TLS_REJECT_UNAUTHORIZED='0';

massive({
    connectionString: CONNECTION_STRING, 
    ssl: {rejectUnauthorized: false}
}).then(db => {app.set("db", db); console.log('db connected')});

app.use(express.json());

// Endpoints
app.post('/auth/register', ctrl.register);
app.post('/auth/login', ctrl.login);
app.get('/api/posts', ctrl.getPosts);

app.listen(SERVER_PORT, ()=>console.log(`listening on ${SERVER_PORT}`));