const express = require("express")
const router = express.Router()
const cors = require("cors")
const nodemailer = require("nodemailer")


const app = express()
app.use(cors())
app.use(express.json())
app.use("/", router)
app.listen(5000, () => console.log("Server Running"))

const contactEmail = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: "jstavey13@gmail.com",
      pass: "Lucius13!",
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });