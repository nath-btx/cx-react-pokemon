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
<<<<<<< HEAD
    console.log('Server app listening on port ' + port)
=======
    console.log('Server app listening on port ' + port);
>>>>>>> 21bbd1227c1e261f3e80fb5fe06d8b2bcf6a42da
})