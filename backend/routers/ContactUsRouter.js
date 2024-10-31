const express = require("express");
const Contact = require("../models/ContactUsModel");
const verifyAdmin = require('../middlewares/verifyAdmin'); 

const router = express.Router();

// POST route to add a new contact message
router.post("/submit", (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;

  if (!firstName || !lastName || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  const newContact = new Contact(req.body);
  newContact
    .save()
    .then((result) => {
      res.status(200).json({ message: "Message received successfully!", result });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to save message." });
    });
});

// GET route to retrieve all contact messages
router.get("/getall", verifyAdmin, (req, res) => { // Add verifyAdmin here
  Contact.find()
    .then((messages) => res.status(200).json(messages))
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to retrieve messages." });
    });
});
// DELETE route to delete a specific contact message by ID
router.delete("/delete/:id", (req, res) => {
  const { id } = req.params;

  Contact.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ message: "Message not found." });
      }
      res.status(200).json({ message: "Message deleted successfully!" });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: "Failed to delete message." });
    });
});

module.exports = router;
