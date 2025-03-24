// users are restaurant patrons
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    });

userSchema.index({ username: 1 });
userSchema.index({ email: 1 });
userSchema.index({ name: 1 });

// use -1 if you want it in desending order

export default mongoose.model("User", userSchema); // where mongoose creates the user model