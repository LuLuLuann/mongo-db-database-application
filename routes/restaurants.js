// create / add / delete restaurants

// uses the schema from Mongoose -- if there are models it is Mongoose -- mongoose to a try/catch

import { Router } from "express";
import User from "../models/Restaurants.js"; // imports schema--> model

export const restaurantsRouter = new Router();

// C
restaurantsRouter.post("/restaurants", async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    await restaurant.save();
    res.status(201).json(restaurant);
  } catch (e) {
    console.error(e);
    res.status(400).json({ message: e.message });
  }
});

// R
// get all
restaurantsRouter.get("/", async (req, res) => {
  try {
    const restaurant = await Restaurant.find({});
    res.json(restaurant)
  } catch (e) {
    res.status(200)
  }
})

//get a single restaurant
restaurantsRouter.get("/:id", async (req, res) => {
  // res.status(200).json({
  //     "status":"ok"
  try {
    const restaurant = await Restaurant.findById(req.params.id)
    if (!restaurant) return res.status(404).json({ message: "Restaurant not found" })
    res.json(user);

  } catch (e) {
    res.status(500).json({ message: e.message }) // not connecting to database
  }
});

// U
restaurantsRouter.patch("/:id", async (req, res) => {
  try {
    const updatedRestaurant = await Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedRestaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json(updatedRestaurant);
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})

restaurantsRouter.delete("/:id", async (req, res) => {
  try {
    const deletedRestaurant = await Restaurant.findByIdAndDelete(req.params.id);
    if (!deletedRestaurant) return res.status(404).json({ message: "Restaurant not found" });
    res.json({ message: "Restaurant deleted successfully" });
  } catch (e) {
    console.error(e);
    res.status(500).json({ message: e.message }); // or 400?
  }
})