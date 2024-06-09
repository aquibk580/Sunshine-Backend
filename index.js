const express = require('express');
const cors = require('cors');
const connectToMongo = require('./db');
const contactRoutes = require('./routes/contact');
const passwordRoutes = require('./routes/password');
const bodyParser = require('body-parser');
const app = express();
const PORT = 8000;
connectToMongo();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/contact',contactRoutes);
app.use('/api/password',passwordRoutes);
app.listen(PORT,()=>{
   console.log(`Server Started at Port number ${PORT}`);
})