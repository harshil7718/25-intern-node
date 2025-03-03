// const UserModel = require("../models/UserModel");
const userModel = require("../models/UserModel")
const bcrypt= require("bcryptjs")
const getUsers = async (req, res) => {
  

  const users = await userModel.find().populate("roleId")//[{}]

  res.json({
    message: "user fetched successfully",
    data:users
  });
};

const loginUser= async(req,res)=>{

  const email= req.body.email;
  const password= req.body.password;

  const foundUserFromEmail=await userModel.findOne({email:email}).populate("roleId");
  console.log(foundUserFromEmail);

  if (foundUserFromEmail != null) {
    
    const isMatch = bcrypt.compareSync(password, foundUserFromEmail.password);
    if (isMatch == true) {
      res.status(200).json({
        message: "login success",
        data: foundUserFromEmail,
      });
    } else {
      res.status(404).json({
        message: "invalid cred..",
      });
    }
  } else {
    res.status(404).json({
      message: "Email not found..",
    });
  }
};
  


// const signup  = async(req,res)=>{

//   //try catch if else...
//   try{

//       const salt = bcrypt.genSaltSync(10);
//       const hashedPassword=bcrypt.hashSync(req.body.password,salt);
//       req.body.password=hashedPassword;


//       const createdUser = await userModel.create(req.body)
//       res.status(201).json({
//           message:"user created..",
//           data:createdUser
//       })

//   }catch(err){
//       console.log(err);
//       res.status(500).json({
//       message:"error",
//       data:err
//       })
//     }
// }


// const bcrypt = require("bcryptjs");
// const userModel = require("../models/User"); // Ensure correct path

const signup = async (req, res) => {
    try {
        // Validate request body
        if (!req.body.password) {
            return res.status(400).json({ message: "Password is required" });
        }

        // Hash password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);
        req.body.password = hashedPassword;

        // Create user
        const createdUser = await userModel.create(req.body);
        res.status(201).json({
            message: "User created successfully",
            data: createdUser,
        });

    } catch (err) {
        console.error("Signup Error:", err);
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message,
        });
    }
};

module.exports = signup;


const addUser= async(req,res)=>{

  const savedUser=await userModel.create(req.body)

    res.json({
      message: "user created successfully",
      data:savedUser
    })

}
const deleteUser = async(req,res)=>{
  const deletedUser= await userModel.findByIdAndDelete(req.params.id)

    res.json({
      message: "user deleted successfully",
      data:deletedUser
    })
}
const getUserById = async (req,res)=>{

  

  const foundUser = await userModel.findById(req.params.id)
  res.json({
    message:"user fatched..",
    data:foundUser
  })

}

const updateUser= async (req,res)=>{
   
  const updatedUser= await userModel.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})

  res.json({
    message: "user updated successfully",
    data:updatedUser
  })
}


module.exports = {
    getUsers,addUser,deleteUser,getUserById,updateUser,signup,loginUser
}