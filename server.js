var express = require('express');
var app = express();
//middleware
app.use(express.static('./public'));
app.use(express.static('./node_modules/bootstrap/dist'))

app.listen(3000);
console.log('Listening on 3000');
