import express from "express";
import PersonsController from "../Controllers/PersonsController.js";

const PersonsRouter = express.Router();

PersonsRouter.get("/", PersonsController.getList);
PersonsRouter.get("/:id", PersonsController.getById);
PersonsRouter.post("/", PersonsController.addPerson);
PersonsRouter.put("/:id", PersonsController.editPerson);
PersonsRouter.delete("/:id", PersonsController.deletePerson);

export default PersonsRouter;