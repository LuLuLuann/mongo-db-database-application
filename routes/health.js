// health based on what they're eating

// router is like a mini app
import { Router } from "express";

export const healthRouter = new Router();

// move to folder called "controllers" if you want to scale
healthRouter.get("/", (req, res) => {
    res.status(200).json({
        "status":"ok"
    })
});

