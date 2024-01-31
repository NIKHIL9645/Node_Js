/* function add(a,b) {
        return a+b;
} */

// ....................................................

/* var add=(a,b)=> a+b;


var result = add(15,2111);
console.log(result);

// ......................................
(function () {
        console.log("Boss Era");
})(); */
// ......................................
// callback function 

/* function callBack() 
{
        console.log("CAllback function calling ");
        
} */

// ..........................................................................................................

/* 
const add1= function (a,b,callback) {
        
        var result = a+b;
        console.log("result is : "+result);
        //this  is the callback function
        callback();
}


// add1(2,4,callBack);  

// # make it shorter 
add1(3,3,function () {
        console.log(' add completed ');
});

// # make it more  shorter 
add1(4,6,()=> console.log('add Dne '));

*/

// ..........................................................................................................
/*

const { log } = require('console')
var fs=require('fs')
var os=require('os')


var user = os.userInfo()
// console.log(user);

//automatically creates greetings.txt and append message hi dell
fs.appendFile("greetings.txt","Hi "+user.username + '!\n',()=>{
        // console.log("Boss Welcome ");
})
/* console.log(os);
console.log("---------------------------------------------------------------------------------------------------------------");
console.log(fs);
*/

// console.log("---------------------------------------------------------------------------------------------------------------");
/*

const notes = require('./notes')
// const _ = require('lodash')
const lodash = require('lodash')

console.log(notes.age);
age=notes.age;
console.log(notes.addNo(age+12,22))


const data=["nikhil",'nikhil',12,12,5,4,3,2,77,11,true,true]
var filter=lodash.uniq(data)//unique data 
console.log(filter);

console.log(lodash.isString(true));
*/


// console.log("-------------------------------------Day 3--------------------------------------------------------------------------");

/*
// Json 2 Object 

const jsonString = '{"name": "john", "age": 30, "city": "Nashik"}';
const JsonObject  = JSON.parse(jsonString);
// console.log(JsonObject.name);

// Object To Json 

const objectConvert = {
        name: "Nikhil",
        age : 23
};

const json = JSON.stringify(objectConvert)
console.log(json);
console.log(typeof(json));
*/

// console.log("-------------------------------------Day 4 & 5 --------------------------------------------------------------------------");

const express = require('express')
const connectDb = require('./db')
const app = express();
const Person = require('./Models/person')
const bodyparser = require('body-parser');
app.use(express.json());
// const MenuItem = require('./Models/MenuItem');
const MenuItemNik = require('./Models/MenuItem')




connectDb();


//--------------------------------------------------------------------------------------------------------------------------------------------


//--------------------------------------------------------------------------------------------------------------------------------------------
app.get('/', function (req, res) {
        res.send('hello world');

});


/* //get all the persons data 
app.get("/all", async (req, res) => {
        try {
                const persons = await Person.find();
                console.log("Data get successfully");
                res.status(200).json(persons);

        }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error ' });
        }
}); */

// get by work type 

/* app.get("/getBytype/:workType",async(req,res)=>{

        try{

                const workType = req.params.workType;//extract the work type from url parameter 
                if(workType=='manager' || workType=='waiter' || workType=='chef' ){
                        const response = await Person.find({work:workType});
                        console.log("response Fetched ");
                        res.status(200).json(response);
                } else{
                        res.status(404).json({error :"Invalid Work type "})

                }
        }catch(err){
                
                console.log(err);
                res.status(500).json({error:" Internal Sever Error "})
        }


}); */



//--------------------------------------------------------------------------------------------------------------------------------------------
// save person 

// /*
// //save  persons  the data to db 
//  app.post('/', async(req, res) => {

//         try {
//                 const data = req.body;
//                 const newPerson = new Person(data);
//                 const response = await newPerson.save();
//                 console.log('data saved ');
//                 res.status(200).json(response);
//         } catch (err) {
//                 console.log(err);
//                 res.status(500).json({ error: 'internal server error '});
//         }


//         /*   const data = req.body; //assuming the request body contains the persons data 
  
//           //create a new person document using the mongoose model 
//           const  newPerson = new Person(data);
//           newPerson.save((error,savedPerson) => {
//                   if(error){
//                           console.log("Error saving person : ",error);
//                           res.status(500).json({error:'internal server error'});
//                   }else{
//                           console.log("data saved Succesfully ");
//                           res.status(200).json(savedPerson);
//                   }
//           }) */

// });
//  */


/* app.get('/idli',function(req,res){

        var customized_idli={
                name:'rava idli',
                size: '10 cm',
                is_sambar:true
                ,is_chutney:true
        }
        res.send(customized_idli)
        // res.send('hello world');

}) */
//--------------------------------------------------------------------------------------------------------------------------------------------

                        // save MenuItem data

/* 
app.post("/savemit",async (req,res)=>{
try{

        const data=req.body;
        const newmenuitem= new MenuItemNik(data);
        const response= await newmenuitem.save()
        console.log("Menu Items Data saved Succesfully ");
        res.status(200).json(response);
}catch(err){
        console.log(err);
        res.status(500).json({err: "internal server error "});

}
});
 
//--------------------------------------------------------------------------------------------------------------------------------------------
                // get all the MenuItems

app.get("/getAll",async(req,res)=>{

        try{

                const  all= await MenuItemNik.find();
                console.log("Data Received Succesfully ");
                res.status(200).json(all);
        }catch(err){
                
                console.log(err);
                res.status(500).json({error:" Internal Sever Error "})
        }


});

                //get menu items by work i.e chef type 

                */


const personRoutes = require('./Routes/PersonRoutes')
app.use('/person', personRoutes); 


const menuRouter = require('./Routes/MenuRoutes')
app.use("/",menuRouter);




//--------------------------------------------------------------------------------------------------------------------------------------------

app.listen(3000, () => {
        console.log("server is Running in port 3000");
});//port no where u will get the server 