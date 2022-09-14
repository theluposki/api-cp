import { users } from "../data/users.js"

export const User = {
  createUser(req, res) {
    const { name } = req.body

    const newUser = {
      id: "a83a57d6-0b8b-4daa-a20e-c78f4b0e3cf0",
      name
    }

    res.status(201).json(newUser)
  },
  readAllUsers(req,res) {
    res.status(200).json(users)
  }
}
