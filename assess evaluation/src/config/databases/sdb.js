import { connect } from "mongoose"


const connectmongo=async(url)=>{
    await connect(url);
}
export default connectmongo;