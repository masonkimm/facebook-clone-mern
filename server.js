const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config({ path: './config/config.env' });

connectDB();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

const posts = require('./routes/posts');

// if (process.env.NODE_ENV === 'development') {
//   app.use(morgan('dev'));
// }

app.use('/api/v1/posts', posts);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

// if (process.env.NODE_ENV === 'production') {
//   console.log('production');
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }

app.listen(PORT, () => {
  console.log(
    `Server live as ${process.env.NODE_ENV} on ${PORT}`.yellow.underline.bold
  );
});
