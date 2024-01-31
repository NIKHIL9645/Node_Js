var mongoose= require('mongoose');

// const { MongoClient} = require('mongodb').MongoClient;

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



// client.connect()
//     .then(() => console.log('Connected Successfully'))
//     .catch(error => console.log('Failed to connect', error))


// const mongoUrl = 'mongodb://localhost:27017/hotels'

// establish a mongoose.connection

// mongoose.connect(mongoUrl, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
// });

//get the default connection 
//mongoose maintains a default connection object representing the mongoDb connection 
// var db = mongoose.Connection;



//define evenet listeners for db connection 
/* db.on('connected',() => {
        console.log("Connected to mongoServer ");
});
db.on('error',(err)=>{
        console.log("  MongoDb connection error "+err);
});
db.on('Disconnected ',()=>{
        console.log("MongoDb disconnected ");
}); */
 

// exprt the db connectin 
 module.exports  = connectDb;