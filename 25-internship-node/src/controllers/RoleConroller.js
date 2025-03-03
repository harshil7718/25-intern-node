const roleModel = require("../models/RoleModel")
const getAllRoles = async (req, res) => {
  

  const roles = await roleModel.find() //[{}]

  res.json({
    message: "role fetched successfully",
    data:roles
  });
};

const addRole= async(req,res)=>{

  const savedRoll=await roleModel.create(req.body)

    res.json({
      message: "role created successfully",
      data:savedRoll
    })

}
const deleteRoll = async(req,res)=>{
  const deletedRoll= await roleModel.findByIdAndDelete(req.params.id)

    res.json({
      message: "role deleted successfully",
      data:deletedRoll
    })
}
const getRoleById = async (req,res)=>{

  

  const foundRole = await roleModel.findById(req.params.id)
  res.json({
    message:"role fatched..",
    data:foundRole
  })

}

const updateRoll= async (req,res)=>{
   
  const updatedRoll= await roleModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

  res.json({
    message: "role updated successfully",
    data:updatedRoll
  })
}


module.exports = {
    getAllRoles,addRole,deleteRoll,getRoleById,updateRoll
}