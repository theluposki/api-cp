import { Router } from "express"

import { User } from "../controllers/User.js"

const route = Router()

// Create
route.post("/", User.createUser)
// Read
route.get("/", User.readAllUsers)
// Update
// Delete

export default route



