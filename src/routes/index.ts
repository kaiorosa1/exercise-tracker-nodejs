import { Router } from "express";
import { categoriesRoutes } from "./categories.routes";
import { userRoutes } from "./users.routes";

const router = Router();

router.use("/users", userRoutes);
router.use("/categories", categoriesRoutes);

export { router };