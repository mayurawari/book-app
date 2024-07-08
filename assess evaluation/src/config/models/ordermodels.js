import { DataTypes} from "sequelize";
import connectsql from "../databases/mdb.js";


const ordermodel = connectsql.define('orderinfo', {
    productname: DataTypes.STRING,
    ordertotal:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    orderdate:{
        type:DataTypes.DATE,
        allowNull:false
    },
    deliverydate:{
        type:DataTypes.DATE,
        allowNull:false

    }
},{
    Timestamp:false
});

connectsql.sync({ force: true });

export default ordermodel;