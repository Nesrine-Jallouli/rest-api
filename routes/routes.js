const express = require('express');
const router = express.Router();
const  User  = require('../models/User');
//@desc Add new User
router.post('/', (req, res) => {
    const newUser = new User({ ...req.body });
    newUser
        .save()
        .then((user) => res.status(200).send(user))
        .catch((err) => res.send(err)); 
})
//@desc Get all users
router.get('/', (req, res) => {
    User.find()
        .then(users=>res.send(users))
        .catch(err=>res.send(err))
})

//@desc Update a user by ID
router.put('/update/:_id', (req, res) => {
    let _id = req.params._id;
    User.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
        .then(user => res.send(user))
        .catch(err => res.send(err));
})
//@desc Delete a user by ID
router.delete('/delete/:_id', (req, res) => {
    let _id = req.params._id;
    User.findByIdAndDelete({ _id })
        .then(user => res.send(user))
        .catch(err => res.send(err));
})

module.exports = router;