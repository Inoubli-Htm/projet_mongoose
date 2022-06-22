const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  let { name, age, email } = req.body;
  age = Number(age);
  try {
    const contact = new Contact({
      name,
      age,
      email,
    });
    await contact.save();
    res.status(201).send({ msg: "contact saved", contact });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({ msg: "all contacts", contacts });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.deleteContact = async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).send("contact deleted...");
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.updateContact = async (req, res) => {
  const { id } = req.params;
  try {
    const updateContact = await Contact.findByIdAndUpdate(
      id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "contact updated", updateContact });
  } catch (error) {
    res.status(500).send("server error");
  }
};

exports.getOneContact = async (req, res) => {
  const { id } = req.params;
  try {
    const contact = await Contact.findById(id);
    res.status(200).send({ msg: "contact finded", contact });
  } catch (error) {
    res.status(500).send("server error");
  }
};
