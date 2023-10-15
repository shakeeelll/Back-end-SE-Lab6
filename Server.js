const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const productRoutes = require('./Routes/productRoutes');
//require('./utils/db');
const port = 3003;

//Middleware
app.use(bodyParser.json());
app.use(cores());

//APIs
app.use('/api', productRoutes)


app.get('/welcome', (req, res) => { 
    res.send('Hello World! This is Shakeel Rajput here!!!!');
});

app.listen(port, ()=> {
    console.log('Server is running on port', + port );
});