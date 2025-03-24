// health based on what they're eating

// router is like a mini app
import { Router } from "express";
import Health from "../models/Health.js"

export const healthRouter = new Router();

// move to folder called "controllers" if you want to scale
// healthRouter.get("/", (req, res) => {
//     res.status(200).json({
//         "status":"ok"
//     })
// });

// C
healthRouter.post("/", async (req, res) => {
  try {
    const health = new Health(req.body);
    await health.save();
    res.status(201).json(health);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

// R
// get all the health records
healthRouter.get("/:id", async (req, res) => {
  try {
    const health = await Health.find({});
    res.json(health)
  } catch (e) {
    res.status(200)
  }
})

//get a single user's health
healthRouter.get("/:id", async (req, res) => {
  // res.status(200).json({
  //     "status":"ok"
  try {
    const health = await Health.findById(req.params.id)
    if (!health) return res.status(404).json({ message: "User health not found" })
    res.json(health);

  } catch (e) {
    res.status(500).json({ message: e.message }) // not connecting to database
  }
});

// U
healthRouter.patch("/:id", async (req, res) => {
  try {
    const updatedHealth = await Health.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedHealth) return res.status(404).json({ message: "User health not found" });
    res.json(updatedHealth);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})

healthRouter.delete("/:id", async (req, res) => {
  try {
    const deletedHealth = await Health.findByIdAndDelete(req.params.id);
    if (!deletedHealth) return res.status(404).json({ message: "User health not found" });
    res.json({ message: "User health deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})
