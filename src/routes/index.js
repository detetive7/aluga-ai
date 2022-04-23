import {Router}  from "express";
import { ContractsRouter } from "./contracts/contracs.route.js";

const MainRouter = Router()

MainRouter.get("/",(req,resp)=>{
    resp.json({status:"ok"})
    })

MainRouter.use("/contracts",ContractsRouter)

export { MainRouter}