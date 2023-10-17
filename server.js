// adding is express and pulling in the config files

const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');
// creating the port and app constants
const PORT = process.env.PORT || 3000;
const app = express();
//boiler plate app start up code
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
    app.listen(PORT, () => {
        console.log("Social Network API server is running on " + `http://localhost:${PORT}` + " 🚀!");
    });
});