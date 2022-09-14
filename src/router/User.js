import { Router } from "express"

import { User } from "../controllers/User.js"

const route = Router()

// Create
route.post("/", User.createUser)
// Read
route.get("/", User.readAllUsers)
route.get("/:id", User.readOneId)
// Update
route.put("/:id", User.updateOneId)
// Delete
route.delete("/:id", User.deleteOneId)
// Auth
route.post("/auth", User.auth)
export default route



