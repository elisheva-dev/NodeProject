import express from "express";
import RoomsController from "../Controllers/RoomsController.js";

const RoomsRouter = express.Router();

RoomsRouter.get("/", RoomsController.getList);
RoomsRouter.get("/:id", RoomsController.getById);
RoomsRouter.post("/", RoomsController.add);
RoomsRouter.put("/:id", RoomsController.update);
RoomsRouter.delete("/:id", RoomsController.delete);

export default RoomsRouter;