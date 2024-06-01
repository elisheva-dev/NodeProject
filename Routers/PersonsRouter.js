import express from "express";
import PersonsController from "../Controllers/PersonsController.js";

const PersonsRouter = express.Router();

PersonsRouter.get("/", PersonsController.getList);
PersonsRouter.get("/:id", PersonsController.getById);
PersonsRouter.post("/", PersonsController.add);
PersonsRouter.put("/:id", PersonsController.update);
PersonsRouter.delete("/:id", PersonsController.delete);

export default PersonsRouter;