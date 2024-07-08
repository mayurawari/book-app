import { Sequelize } from "sequelize";
import {config} from "dotenv";
config();
const port=process.env.SQ_PORT;
const user=process.env.SQ_USER;
const password=process.env.SQ_PASSWORD;
const host=process.env.SQ_HOST;


const connectsql=new Sequelize("store",`${user}`,`${password}`,{
   host:`${host}`,
   port:`${port}`,
   dialect:"mysql"

});

export default connectsql; 