const express = require('express')
const connectDb = require('./db')
const app = express();
const Person = require('./Models/person')
const bodyparser = require('body-parser');
app.use(express.json());
// const MenuItem = require('./Models/MenuItem');
const MenuItemNik = require('./Models/MenuItem')

//connectdb func called to check Db connection setup 
connectDb();




app.get('/', function (req, res) {
        res.send('hello world');

});



const personRoutes = require('./Routes/PersonRoutes')
app.use('/person', personRoutes);


const menuRouter = require('./Routes/MenuRoutes')
app.use("/", menuRouter);





app.listen(3000, () => {
        console.log("server is Running in port 3000");
});//port no where u will get the server 