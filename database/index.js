import mongoose from "mongoose"

const configOptions={
    useNewUrlParser:true,
    useUnifiedTopology:true
}

const connectToDB=async()=>{
    const pswrd='Oz9cxQ4T4bMs9ouq'
    const connectionUrl=`mongodb+srv://mridultiwari2002:${pswrd}@hackathon.ziwpyxq.mongodb.net/`;
    mongoose
    .connect(connectionUrl,configOptions)
    .then(()=>console.log('connected to database'))
    .catch((err)=>
        console.log(`Get Error from DB connection ${err}`)
    );
}
export default connectToDB;