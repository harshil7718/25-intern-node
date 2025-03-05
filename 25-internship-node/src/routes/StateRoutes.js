const { addState, getAllStates } = require("../controllers/StateController.js")

const routes= require("express").Router()
routes.post("/add",addState)
routes.get("/get",getAllStates)

module.exports=routes