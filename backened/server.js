// const express=require("express");
// const app=express();


// const {MongoClient}=require("mongodb")

//  const dotenv=require("dotenv").config()
// // const connectdb=require("./config/connectiondb")


// dotenv.config()

// MongoClient.connect(process.env.MONGO_URI)
// .then(()=>{
//     console.log("mongodb atlas connected successfully");
// })
// .catch((error)=>{
//     console.log("Error",error)
// })
// const cors=require("cors")
// const PORT=process.env.PORT||3000;
// console.log(process.env)

// connectdb()
// app.use(express.json())
// app.use(cors())
// app.use(express.static("public"))


 
// app.use("/",require("./routes/user"))


// app.use("/recipe",require("./routes/recipe"));


// app.listen(PORT,(err)=>{
//     console.log("app is listeneing on port ${PORT}")
// })

const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config(); // Load environment variables
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB with Mongoose
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Atlas connected successfully"))
  .catch(error => console.error("Error connecting to MongoDB:", error));

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.static("public"));

// Routes
app.use("/", require("./routes/user"));
app.use("/recipe", require("./routes/recipe"));

// Start server
app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});

