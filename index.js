const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');


app.listen(port, (err) => {
if (err) {
    throw new Error('Something bad happened...');
}

app.get('/api/movies', (req, res) => {
    connection.query('SELECT * from movie', (err, results) => {
        if (err) {
            res.status(500).send('Error retrieving movies');
            } else {
            res.json(results);
            }
        });
    });

    app.get('/api/movies/names', (req, res) => {
        connection.query('SELECT name FROM movie', (err, results) => {
            if (err) {
                res.status(500).send('Error retrieving movies');
                } else {
                res.json(results);
                }
            });
        });

console.log(`Server is listening on ${port}`);
});