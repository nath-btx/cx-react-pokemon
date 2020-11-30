const express = require('express');
const app = express();
const port = process.env.PORT || 5454;

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('C:/Users/Vdofa/Desktop/S5/NODEJS/pokemon/index.html',(err) => {
        if (err) console.log('erreur')
    });
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port);