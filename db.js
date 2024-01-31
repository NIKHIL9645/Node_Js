var mongoose= require('mongoose');

const client ='mongodb://127.0.0.1:27017/hotels';

const connectDb =async () => {
        try{
                const conn = await mongoose.connect(client, {
                        useNewUrlParser: true,
                });

                console.log("mongoDb connected :",conn.connection.host);
        }catch(error){
                console.error(error);
                // console.error(error.message);
                process.exit();
        }
}




// exprt the db connectin 
 module.exports  = connectDb;