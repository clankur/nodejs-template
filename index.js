const express = require('express');
const socketIO = require('socket.io');
const path = require('path');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/js/lib', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use("/css", express.static(path.join(__dirname, '/public/css')));
app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname+'/index.html'));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
