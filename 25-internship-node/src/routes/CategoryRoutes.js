const routes = require("express").Router()
const categoryController =require('../controllers/CategoryController')
routes.get("/getcat",categoryController.getCategories)
routes.get('/getcat/:id',categoryController.getCategoryById)
routes.post('/addcat', categoryController.addCategory)
module.exports=routes;
