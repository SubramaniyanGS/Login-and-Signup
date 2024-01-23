require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose=require('mongoose');
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const profileRoutes=require("./routes/profile");

//Database Connection
mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connection Successfull"))
  .catch((err) => {
    console.error(err);
  });

//middlewares

app.use(express.json());
app.use(cors());


// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/profile",profileRoutes);



app.listen(5000,()=>{
  console.log("Server is Running on 5000");
});


