import ModelUser from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

export const User = {
  async auth(req,res) {
    const { email, password } = req.body

    try {
      const existingUser = await ModelUser.findOne({ email }).select("+password")

      if(!existingUser){
        return res.status(400).json({ error: "Invalid username or password" })
      }

      if (!(await bcrypt.compare(password, existingUser.password))) {
        return res.status(400).json({ error: "Invalid username or password" })
      }

      const token = await jwt.sign({
        id: existingUser._id,
        rules: existingUser.rules 
      }, process.env.SECRET, {
        expiresIn: 86400
      })

      return res.status(200).json({
        token,
        msg: "Autenticado com sucesso!"
      })

    } catch (error) {
      res.status(400).json(error)
    }
  },
  async createUser(req, res) {
    try {
      const { email } = req.body

      const existingUser = await ModelUser.findOne({ email })

      if (existingUser) {
        return res.status(400).json({
          error: "user already exists"
        })
      }

      return res.status(201).json(await ModelUser.create(req.body))
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async readAllUsers(req, res) {
    try {
      return res.status(200).json(await ModelUser.find())
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async readOneId(req,res) {
    try {
      const id = req.params.id

      const user = await ModelUser.findById({ _id: id })
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async updateOneId(req, res){
    try {
      const user = await ModelUser.findByIdAndUpdate({ _id: req.params.id }, req.body)
      return res.status(200).json(user)
    } catch (error) {
      return res.status(400).json(error)
    }
  },
  async deleteOneId(req, res){
    try {
      const user = await ModelUser.findByIdAndRemove({ _id: req.params.id })
      return res.status(200).json(user._id)
    } catch (error) {
      return res.status(400).json(error)
    }
  },
}
