const Contact = require("../model/contact");
const mongoose = require('mongoose');
async function setData(req, res) {
  const { name, email, mobileNumber, message } = req.body;
  try {
    const newContact = await Contact.create({
      name,
      email,
      mobileNumber,
      message,
    });
    if (!name || !email || !mobileNumber || !message) {
      res.status(400).json("name,email,contact or message is missing");
    }
    res.status(200).json("Message Sent");
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: "Email already exists" });
    } else {
      res.status(400).json(error.message);
    }
  }
}

async function handleDelete(req, res) {
  try {
    const id = req.params.id;
    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json("Not found");
    }
    const contact = await Contact.findByIdAndDelete(id);
    if (!contact) {
      return res.status(404).json("Not found");
    }
    res.status(200).json({ Success: "Sucessfully Deleted record" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json("Internal Server error");
  }
}

module.exports = {
  setData,
  handleDelete,
};
