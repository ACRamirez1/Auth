let express = require('express');

let app = express();

const port = process.env.PORT || 4001;

app.use (express.json());

let authRoutes = require('./routes/authRoutes')
let messageRoutes = require('./routes/messageRoutes')

app.use('/', authRoutes);
app.use('/', messageRoutes);

// testing




app.listen(port, () => {
    console.log('Web Server listening on port. ', port)
})