const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const cors = require('cors');

if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(cors());

const routes = require('./src/routes/blog.js');

app.use('/blog', routes);

app.use((err, req, res) => {
  res.status(err.status).json(err);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(port, () => {
    console.log(`Oversharing on port ${port}!`);
  });
}
module.exports = app;
