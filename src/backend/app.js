const express = require('express');
const app = express();
const port = 3001;
const getUsers = require("./users");

             
app.get('/rest/users', (req, res) => res.send(getUsers()));
app.listen(port, () => console.log(`Yes server is running`));