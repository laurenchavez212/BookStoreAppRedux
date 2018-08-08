const env = 'development';
const config = require('./knexfile.js')[env];
const knex = require('knex')(config);
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
app.use(bodyParser.json());

app.get('/', function(req, res) {
  knex.raw("SELECT * FROM students").then((result) => {
    res.json(result.rows)
  })
  .catch((err) => {
    console.error(err)
  });
});

app.get('/students/:id', (req, res)=> {
  knex.raw(`SELECT students.id, students.name FROM students WHERE id = ${req.params.id}`).then((results)=> {
    res.json(results.rows)
  })
})

app.listen(port, function() {
  console.log('Listening on', port);
});
