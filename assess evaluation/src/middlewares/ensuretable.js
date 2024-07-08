import connectsql from "../config/databases/mdb"


 const ensuretable=(req,res,next)=>{
    const query=`CREATE TABLE IF NOT EXISTS orderinfo(
    id INT PRIMARY KEY AUTO_INCREMENT,
    productname VARCHAR(200) NOT NULL,
    ordertotal INT NOT NULL,
    orderdate DATE NOT NULL,
    deliverydate DATE NOT NULL
    )`

    connectsql.query(query,(err,result)=>{
        if(err){
          console.log(err);
        }
        else{
            next();
        }
    })
 }
 export default ensuretable;