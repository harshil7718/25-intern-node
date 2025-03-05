const StateModel = require("../models/StateModel")


const addState =async(req,res)=>{

    try{
        const State= await StateModel.create(req.body)
        res.status(201).json({
            message:"create state",
            data:State
        })

    }catch(err){

        res.status(500).json({
            message:err.message
        })

    }
}
 const getAllStates = async (req,res)=>{


  try{
        const getState = await StateModel.find()
        res.status(200).json({
            message:"state found",
            data:getState
        })
  } catch(err){
    res.status(500).json({
        message:err.message
    })
  } 
 }
 module.exports={
    getAllStates,addState
 }