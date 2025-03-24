import mongoose from "mongoose";

const healthSchema = new mongoose.Schema(
    {
        // tie healthSchema to userSchema id (userId)  ///   /health/:id if req.params == userId then find user id
        userId: {
            type: mongoose.ObjectId,
            ref: "User",
        },
        heartHealth: {
            type: String, 
            enum: ["Good", "Bad"],
            required: true,
        },
        cholesterol: {
            type: Number,
            required: true, 
        },
        bloodPressure: {
            type: 
            Enum ("High BP", "Normal BP", "Low BP"),
            required: true,
        },
        obesity: {
            type: Boolean,
            required: true, 
        },

        diabetes: {
            type: Boolean,
            required: true, 
        },
    },
    {
        timestamps: true,
    });

// healthSchema.index({ userId: 1 });

// use -1 if you want it in desending order

export default mongoose.model("Health", healthSchema); // where mongoose creates the health model