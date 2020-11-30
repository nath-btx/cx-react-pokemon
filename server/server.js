const express = require('express');
const app = express();
const port = process.env.PORT || 5454;

app.use(express.static("D:/WAMP/www/" + '/cx-react-pokemon'));

app.get('/', (req, res) => {
    res.set('Content-Type', 'text/html');
    res.sendFile('./index.html',(err) => {
        if (err) console.log('erreur')
    });
});

app.listen(port, () => {
    console.log('Server app listening on port ' + port)
})