require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authenticate = require('./middlewares/authenticate');
const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const propertyRoute = require('./routes/propertyRoute');
const searchRoute = require('./routes/searchRoute');
const notFoundMiddleware = require('./middlewares/notFound');
const errorMiddleware = require('./middlewares/error');

//sync db with model
// const { sequelize } = require('./models');
// sequelize.sync({ force: true })

const app = express();
// dev run morgan
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.use('/auth', authRoute);
app.use('/users', authenticate, userRoute);
app.use('/properties', propertyRoute);
app.use('/searchDatas', searchRoute);


app.use(notFoundMiddleware);
app.use(errorMiddleware);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log('server running on port: ' + port));