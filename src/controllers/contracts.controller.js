import { request } from "express";
import { response } from "express";


class ContracsController {
    
    /**
     * @param {*} req 
     * @param {response} resp 
     * @description Lista os Contratos
     */
    list(req,resp){
        resp.json([{id:1,id_imovel:2,cpf_locatario:"515616516516"}])
    }
     
    /**
     * @param {request} req 
     * @param {response} resp 
     * @description Lista os Contratos
     */
    getById(req,resp){
        const {id} = req.params
        if(id == 10) return resp.json({id:1,id_imovel:2,cpf_locatario:"515616516516"})
        return resp.status(404).json({error:{message:"Contract not found"}})
    }
}


export {ContracsController}