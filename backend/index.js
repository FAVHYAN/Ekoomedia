const express = require ('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

//Settings

app.set('port', process.env.PORT || 8000);


//Middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));


//routes

app.use('/person',require('./routes/personRoutes'));

//starting the server

app.listen(app.get('port'), () => {
console.log('server on', app.get('port'));
});