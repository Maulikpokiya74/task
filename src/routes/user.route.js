const express = require("express")

const router = express.Router()
const userController = require("../controllers/user.controller")
router.post("/hello", userController.addUser)

module.exports = router