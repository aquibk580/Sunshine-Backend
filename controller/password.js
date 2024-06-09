const Contact = require("../model/contact");
const adminPassword = process.env.PASSWORD;

async function verifyPassword(req, res) {
  try {
    const { password } = req.body;
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    if (password === adminPassword) {
      const allContacts = await Contact.find({});
      return res.status(200).json(allContacts);
    } else {
      return res.status(200).json("Incorrect Password");
    }
  } catch(error) {
    res.status(500).json("Internal Server Error");
  }
}

module.exports = {
  verifyPassword,
};
