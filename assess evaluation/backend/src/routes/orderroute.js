import { Router, text } from "express";
import ordermodel from "../config/models/ordermodels.js";
import role from "../middlewares/role.js";
import nodemailer, { createTransport } from "nodemailer";
import { config } from "dotenv";
import logger from "../logs/logger.js";
config();
const user = process.env.E_USER;
const pass = process.env.E_PASSWORD;
const buyer = process.env.E_USER;

const orderroute = Router();

const transporter = createTransport({
    service: "gmail",
    auth: {
        user: user,
        pass: pass,
    }
})

orderroute.post("/order", async (req, res) => {
    const { productname, ordertotal, orderdate, deliverydate } = req.body;
    try {
        logger.info("logs from orderrroute");
        logger.error("error logs from orderrroute");
        const item = await ordermodel.create({ productname, ordertotal, orderdate, deliverydate });
        
        const mailoptions = {
            from: user,
            to: buyer,
            text: "Please confirm you order"
        }

         transporter.sendMail(mailoptions, (error) => {
            if (error) return console.log(error);

            console.log(" confirmation email sent");
        })
        
        res.send(item);
    } catch (error) {
        console.log(error);
    }
})
orderroute.get("/order/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const item = await ordermodel.findByPk({ id });
        res.send(item);
    } catch (error) {
        console.log(error);
    }
})


export default orderroute;