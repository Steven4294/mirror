//Install express server
const express = require('express');
const path = require('path');
const cors = require('cors')
const request = require('request')

const bodyParser = require('body-parser');
const app = express();

const connectOptions = {
  autoReconnect: true,
  useNewUrlParser: true,
  promiseLibrary: global.Promise // Deprecation issue again
};

 

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/ck', (req, res) => {
    res.redirect('https://record.commissionkings.ag/_ESE0Qulmh3-3_O3IiMN7EWNd7ZgqdRLk/1/')
})

app.get('/b365', (req, res) => {
    res.redirect('https://www.bet365.com')
})
// localhost:8000/uf/eee/FIXEDMATCHES_1.gif
// http://www.best-bet.asia/uf/eee/FIXEDMATCHES_1.gif
app.get('/*', (req, res) => {
    console.log(req.url)
    const url = `http://www.best-bet.asia/${req.url}`
 
 
    request({
      url: url,
      encoding: null
    }, 
    (err, resp, buffer) => {
      if (!err && resp.statusCode === 200){
        res.set("Content-Type", "image/gif");
        res.send(resp.body);
      }
    });
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8000);
