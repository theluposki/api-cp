import { Router } from "express"

import Auth from "../middlewares/auth.js"
import { User } from "../controllers/User.js"

const route = Router()

route.post("/", User.createUser) // Create
route.get("/", Auth, User.readAllUsers) // Read
route.get("/:id", User.readOneId) // Read One
route.put("/:id", User.updateOneId) // Update 
route.delete("/:id", User.deleteOneId) // Delete
route.post("/auth", User.auth) // Auth

export default route
