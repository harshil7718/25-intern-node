const mongoose= require("mongoose")

const categorySchema= new mongoose.Schema({

    categoryName: {
        type: String,
        required: true,
        enum: ['Fashion', 'Art', 'Collectibles'] // Adjust as needed
      },
      description: {
        type: String,
        required: true
      },
      active: {
        type: Boolean,
        default: true
      }
    }, 
    {
         timestamps: true 
        });

module.exports= mongoose.model("category", categorySchema)