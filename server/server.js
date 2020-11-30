const express = require('express');
const app = express();
const port = process.env.PORT || 5454;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.send(index);
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);
});