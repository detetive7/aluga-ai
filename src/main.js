import express from "express";
import dotenv from "dotenv";
import {MainRouter} from "./routes/index.js";
dotenv.config()


const App = express()

App.use(MainRouter)


App.listen(process.env.APP_PORT,()=>{console.log(`Servidor rodando na porta ${process.env.APP_PORT}`)})