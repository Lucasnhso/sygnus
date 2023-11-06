import express from "express";
import UserController from "./controllers/UserController";

const userController = new UserController();
const routes = express.Router();

routes.get("/users", userController.index);
routes.get("/users/:id", userController.show);
routes.post("/users", userController.store);
routes.put("/users/:id", userController.update);
routes.delete("/users/:id", userController.destroy);

export default routes;
