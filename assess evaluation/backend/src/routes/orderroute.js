import { Router } from "express";
import ordermodel from "../config/models/ordermodels.js";
import role from "../middlewares/role.js";

const orderroute=Router();

orderroute.post("/order",role(["admin","user"]),async(req,res)=>{
    const {productname,ordertotal,orderdate,deliverydate} =req.body;
    try {
        const item=await ordermodel.create({productname,ordertotal,orderdate,deliverydate});

        res.send(item);
    } catch (error) {
        console.log(error);
    }
})
orderroute.get("/order/:id",role(["admin","user"]),async(req,res)=>{
    const {id} =req.params;
    try {
        const item=await ordermodel.findByPk({id});

        res.send(item);
    } catch (error) {
        console.log(error);
    }
})
export default orderroute;