/** import dependencies */
import 'dotenv/config'
import express from "express"
import cors from "cors"
import "express-async-errors"
import compression from "compression"
import helmet from "helmet"


/** import routes */
import Home from "./router/home.js"
import User from "./router/User.js"

/** instancia server */
const app = express()

/** Middlewares */
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(helmet())
app.use(compression())

app.use("/", Home)
app.use("/user", User)

/** Listen */
app.listen(process.env.PORT, console.log(`[ App ] running at ${process.env.HOST}:${process.env.PORT}`))
