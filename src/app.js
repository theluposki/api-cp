/** import dependencies */
import 'dotenv/config'
import express from "express"
import cors from "cors"
import "express-async-errors"
import compression from "compression"
import helmet from "helmet"


/** import routes */
import Home from "./router/home.js"

/** instancia server */
const app = express()

/** Middlewares */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())

app.use("/", Home)

/** error middlewarer */
app.use((error, req,res,next) => {
  console.log(error)
  return res.status(500).json({  error: "[ ERROR ] error authenticating" })
})

/** Listen */
app.listen(3001, console.log("[ App ] running at 127.0.0.1:3001"))
