import mongoose from "mongoose";

const restaurantsSchema = new mongoose.Schema(
    {
        restaurant_name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
            unique: true,
        },
        phone_number: {
            type: String,
            required: true,
            unique: true,
        },
        health_rating: {
            type: String,
            required: true,
        },
        cuisine_type: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

restaurantsSchema.index({ restaurant_name: 1 });
restaurantsSchema.index({ cuisine_type: 1 });
restaurantsSchema.index({ health_rating: 1 });

// use -1 if you want it in desending order

export default mongoose.model("Restaurants", restaurantsSchema); // where mongoose creates the user model