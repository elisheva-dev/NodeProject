import express from "express";
import RoomsController from "../Controllers/RoomsController.js";

const RoomsRouter = express.Router();

RoomsRouter.get("/", RoomsController.getList);
RoomsRouter.get("/:id", RoomsController.getById);
RoomsRouter.post("/", RoomsController.addRoom);
RoomsRouter.put("/:id", RoomsController.editRoom);
RoomsRouter.delete("/:id", RoomsController.deleteRoom);

export default RoomsRouter;