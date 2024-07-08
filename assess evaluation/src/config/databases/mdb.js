import { Sequelize } from "sequelize";


const connectsql=new Sequelize("store","root","password",{
   host:"localhost",
   dialect:"mysql"
});

export default connectsql;