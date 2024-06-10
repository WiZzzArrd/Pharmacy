const express = require("express");
const cors = require("cors");
require("dotenv").config()
const app = express();
const PORT = process.env.PORT || 4000;
const sequelize = require("./db")
const models = require("./models/models")
const fileUpload = require("express-fileupload")
const router = require("./routes/index")
const errorHandler = require("./middleware/ErrorHandlingMiddleware")
const path = require("path")

app.use(express.json());
app.use(cors());
app.use(express.static(path.resolve(__dirname, "static")))
app.use(fileUpload({}))
app.use("/api", router)


app.use(errorHandler)




const start = async ()=>{
  try {

    await sequelize.authenticate()
    await  sequelize.sync()

    app.listen(PORT, (err) => {
      console.log(`server has been started on ${PORT} port`);
    });


  }catch (e){
    console.log(e)
  }
}


start()