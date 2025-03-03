const routes = require("express").Router()
const roleController= require('../controllers/RoleConroller')
routes.get("/roles",roleController.getAllRoles)
routes.post('/role',roleController.addRole)
routes.delete('/role/:id',roleController.deleteRoll)
routes.get('/role/:id',roleController.getRoleById)
routes.put('/role/:id',roleController.updateRoll)
module.exports = routes