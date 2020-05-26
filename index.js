const express = require('express');
const app = express();
const port = 3000;
const connection = require('./conf');


const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
extended: true
}));

app.delete('/api/movies/:id', (req, res) => {

    // Get the data sent
    const idmovie = req.params.id;
    
    // connection to the database, and insert the movie
    connection.query('DELETE FROM movie WHERE id = ?', [idmovie], err => {
        if (err) {
        // If an error has occurred, then the user is informed of the error
        console.log(err);
        res.status(500).send("Error deleting an movie");
        } else {
        // If everything went well, we send a status "ok".
        res.sendStatus(200);
        }
    });
    });

app.listen(port, (err) => {
    if (err) {
        throw new Error('Something bad happened...');
    } 
    console.log(`Server is listening on ${port}`);
}) 
