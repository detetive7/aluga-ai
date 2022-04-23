import {Router}  from "express";
import { ContracsController } from "../../controllers/contracts.controller.js";

const ContractsRouter = Router()

const controller = new ContracsController()

ContractsRouter.get("/",controller.list)
ContractsRouter.get("/:id",controller.getById)


export { ContractsRouter }