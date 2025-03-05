const express = require("express") //express....
const mongoose = require("mongoose")
const cors=require("cors");
// import bodyParser from "body-parser";
// const bodyParser = require("body-parser")

const app = express();
// app.use(bodyParser.json())
// app.use(cors())
// // app.use(express)

app.use(express.json()); // Use express built-in JSON parsing
app.use(cors());


const roleRoutes = require("./src/routes/RoleRoutes")
app.use(roleRoutes)
const userRoutes = require("./src/routes/UserRoutes");
// const bodyParser = require("body-parser");
app.use(userRoutes)

const stateRoutes= require("./src/routes/StateRoutes")
app.use(stateRoutes)

const cityRoutes= require('./src/routes/CityRoutes')
app.use(cityRoutes)

const categoryRoutes=require('./src/routes/CategoryRoutes')
app.use(categoryRoutes)

const productRoutes=require('./src/routes/ProductRoutes')
app.use(productRoutes)

mongoose.connect("mongodb+srv://harshilp7718:SqNcKQASM4WQi1l9@cluster01.gsjaj.mongodb.net/xyz?retryWrites=true&w=majority&appName=Cluster01").then(()=>{
    console.log("database connected....")
})

// app.get("/user", (req, res) => {
//   res.send("This is the first  api");
// });

// app.get("/test", (req, res) => {
//   res.json({ message: "This is the first api" });
// });

// app.get("/harshil", (req, res) => {
//   res.json({
//     Name: "Harshil",
//     Age: "51",
//     occupation: "Computer engg.",
//     pasion: "forex treder",
//     having: "American express credit card",
//     nameOfBapa: "apleshbhai",
//   });
// });

const PORT = 7777;
app.listen(PORT, () => {
  console.log(`Server is connected on localhost:${PORT}`);
});