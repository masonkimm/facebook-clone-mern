const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();

const posts = require('./routes/posts');

const app = express();

app.use(cors());

app.use(express.json());

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use('/api/v1/posts', posts);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(
    `Server live as ${process.env.NODE_ENV} on ${PORT}`.yellow.underline.bold
  );
});
