import express from "express";
import { config } from "dotenv";
import connectmongo from "./src/config/databases/sdb.js";
import connectsql from "./src/config/databases/mdb.js";
import userroute from "./src/routes/userroute.js";
import auth from "./src/middlewares/auth.js";
import bookroute from "./src/routes/bookroute.js";
import orderroute from "./src/routes/orderroute.js";
import logger from "./src/logs/logger.js";
import { format } from "sequelize/lib/utils";
import stream from "node:stream";
config();
// implement the server here 
const server=express();
const port=process.env.PORT || 8080;
const url=process.env.URl;

server.use(express.json());
server.use("/api",userroute);
server.use("/api/store",auth,bookroute);
server.use("/api/details",orderroute);

server.get("/",(req,res)=>{
  res.send("this is home route");
  logger.log("this is home route logs");
})



server.listen(port,async()=>{
try {
    await connectsql.authenticate();
    await connectmongo(url);
    console.log("connected to databases");
    console.log(`server is running on port : ${port}`);
} catch (error) {
    console.log(error);
}
})


// STATUS_CODES: {
//     '100': 'Continue',
//     '101': 'Switching Protocols',
//     '102': 'Processing',
//     '103': 'Early Hints',
//     '200': 'OK',
//     '201': 'Created',
//     '202': 'Accepted',
//     '203': 'Non-Authoritative Information',
//     '204': 'No Content',
//     '205': 'Reset Content',
//     '206': 'Partial Content',
//     '207': 'Multi-Status',
//     '208': 'Already Reported',
//     '226': 'IM Used',
//     '300': 'Multiple Choices',
//     '301': 'Moved Permanently',
//     '302': 'Found',
//     '303': 'See Other',
//     '304': 'Not Modified',
//     '305': 'Use Proxy',
//     '307': 'Temporary Redirect',
//     '308': 'Permanent Redirect',
//     '400': 'Bad Request',
//     '401': 'Unauthorized',
//     '402': 'Payment Required',
//     '403': 'Forbidden',
//     '404': 'Not Found',
//     '405': 'Method Not Allowed',
//     '406': 'Not Acceptable',
//     '407': 'Proxy Authentication Required',
//     '408': 'Request Timeout',
//     '409': 'Conflict',
//     '410': 'Gone',
//     '411': 'Length Required',
//     '412': 'Precondition Failed',
//     '413': 'Payload Too Large',
//     '414': 'URI Too Long',
//     '415': 'Unsupported Media Type',
//     '416': 'Range Not Satisfiable',
//     '417': 'Expectation Failed',
//     '418': "I'm a Teapot",
//     '421': 'Misdirected Request',
//     '422': 'Unprocessable Entity',
//     '423': 'Locked',
//     '424': 'Failed Dependency',
//     '425': 'Too Early',
//     '426': 'Upgrade Required',
//     '428': 'Precondition Required',
//     '429': 'Too Many Requests',
//     '431': 'Request Header Fields Too Large',
//     '451': 'Unavailable For Legal Reasons',
//     '500': 'Internal Server Error',
//     '501': 'Not Implemented',
//     '502': 'Bad Gateway',
//     '503': 'Service Unavailable',
//     '504': 'Gateway Timeout',
//     '505': 'HTTP Version Not Supported',
//     '506': 'Variant Also Negotiates',
//     '507': 'Insufficient Storage',
//     '508': 'Loop Detected',
//     '509': 'Bandwidth Limit Exceeded',
//     '510': 'Not Extended',
//     '511': 'Network Authentication Required'
//   }