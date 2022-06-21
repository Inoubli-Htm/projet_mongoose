const express = require("express");
const {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  getOneContact,
} = require("../controllers/contactControllers");
const router = express.Router();

//add new contact
// method post
// req.body
router.post("/addContact", addContact);
//get all contacts
// method get
router.get("/allContacts", getAllContacts);
//Delete contacts
// method delete
// req.params
router.delete("/deleteContact/:id", deleteContact);

// update contact
// methode put
// req.body
// req.params
router.put("/updateContact/:id", updateContact);

//get one contact
// method get
// req.params
router.get("/getOneContact/:id", getOneContact);

module.exports = router;
