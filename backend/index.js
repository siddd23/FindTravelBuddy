const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const SubmitTrip = require('./routes/SubmitTrip'); // Ensure the correct path

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

app.use('/submittrip', SubmitTrip); // Use the correct path for mounting the router
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('hello world')
})

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

db.once('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
