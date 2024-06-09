const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique:false
  },
  mobileNumber: {
    type: String, 
    required: true,
  },
  message: {
    type: String,
    required: true,
  }
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
