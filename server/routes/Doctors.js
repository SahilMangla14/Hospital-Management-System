const express = require("express");
require("dotenv").config();

const router = express.Router();

const {
    getDoctors,
    doctorRegister,
    doctorLogin,
    updatedoctor,
    deletedoctor
  } = require('../controllers/doctors')

router.route('/').get(getDoctors)
router.route('/register').post(doctorRegister)
router.route('/login').post(doctorLogin)
router.route('/:doctorId').patch(updatedoctor)
router.route('/:doctorId').delete(deletedoctor)

module.exports = router
