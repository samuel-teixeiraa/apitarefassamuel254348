const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes'); 

const app = express();

app.use(cors());
app.use(express.json());

const mongoURL = "mongodb+srv://samuel254348:Tourist12@cluster0.k57z562.mongodb.net/tarefasDB?retryWrites=true&w=majority";

mongoose.connect(mongoURL)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error(err));

app.use('/api', routes);

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => console.log(`Server running on port ${port}`));
