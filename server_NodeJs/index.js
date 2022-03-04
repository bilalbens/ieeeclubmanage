const express = require('express')
const expressValidator = require('express-validator')
const path = require("path")
const app = express();
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const cors=require("cors");
const expressJwt = require('express-jwt')
const morgan = require('morgan');



//config app
require('dotenv').config();
const port = process.env.PORT || 3000


//connect database

mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true})
.then(()=>console.log("ieeeEnsafDb connected"))
.catch(()=>console.log("ieeeEnsafDb not connected"))


//import routes
const authRoutes = require("./routes/auth")
const userRoutes = require("./routes/users")




//Middlewares
app.use(express.json()) // when we sent data to DB example: "const user = new User(req.body)" the req.body should be json
app.use(expressValidator()) // to validate data like name and email while signup function 
app.use(cookieParser())//
app.use(cors())// to allow all cross origin request from any site 
app.use(morgan("combined"));



//Routes Middleware
app.use("/", authRoutes)
app.use("/user", userRoutes)
 


// after build 
app.use(express.static(path.join(__dirname, ".","public")))

app.get('/*',(req,res)=>{
  res.sendFile(path.join(__dirname,".","public","index.html"))
})




app.listen(port, () => {
  console.log(`listening on port ${port}!`)
});
