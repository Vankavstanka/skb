var express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());
app.get('/task2C', (req, res, next) => {

  const username = typeof (req.query.username) == 'undefined' ? 'Empty Empty Empty'
   : req.query.username;
  const result = /[a-z\d_\-.]+$/gi.exec(username.replace(/\?.+$/gi, '')
.replace(/(https?:\/\/[^\/]+\/[^\/]+)\/.+$/gi, '$1'));
  console.log(`Query: ${req.originalUrl} <br>-<br>Вывод: @${result[0]}`);
  res.send('@' + result[0]);

});

app.listen(3000, () => {console.log('App listening on port 3000!');
});
