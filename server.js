const Express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const app = new Express();

app.use(helmet());
app.use(morgan('combined'));

app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: Date.now(),
    env: process.env
  })
})

app.listen(3000, '0.0.0.0', err => {
  if (err) {
    process.exit(err);
  }
  console.log('app up and listening on 3000');
})
