import { Request, Response, Router } from "express";

const router = Router();

router.use("/",(request: Request, response: Response)=> {
    response.json({
        message: "Hello from Exercise Tracker App"
    });
});
export { router };