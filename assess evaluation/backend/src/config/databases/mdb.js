import { Sequelize } from "sequelize";


const connectsql=new Sequelize("store","avnadmin","AVNS_EgrQ8zHGcvli1NFd9O1",{
   host:"mysql-32205d85-mayurawari50-cb28.h.aivencloud.com",
   port:"11161",
   dialect:"mysql"
   
});

export default connectsql;