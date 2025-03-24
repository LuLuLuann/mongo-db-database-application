// uses the schema from Mongoose -- if there are models it is Mongoose -- mongoose to a try/catch

import { Router } from "express";
import User from "../models/User.js"; // imports schema--> model

export const userRouter = new Router();

// C
userRouter.post("/", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

// R
// get all the users
userRouter.get("/", async (req, res) => {
  try {
    const user = await User.find({});
    res.json(user)
  } catch (e) {
    res.status(200)
  }
})

//get a single user
userRouter.get("/:id", async (req, res) => {
  // res.status(200).json({
  //     "status":"ok"
  try {
    const user = await User.findById(req.params.id)
    if (!user) return res.status(404).json({ message: "User not found" })
    res.json(user);

  } catch (e) {
    res.status(500).json({ message: e.message }) // not connecting to database
  }
});

// U
userRouter.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedUser) return res.status(404).json({ message: "User not found" });
    res.json(updatedUser);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})

userRouter.delete("/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (!deletedUser) return res.status(404).json({ message: "User not found" });
    res.json({ message: "User deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})