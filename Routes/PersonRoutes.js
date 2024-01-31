const express = require('express')
const router = express.Router();
const Person = require('./../Models/person')



//save  persons  the data to db 
router.post('/', async(req, res) => {

        try {
                const data = req.body;
                const newPerson = new Person(data);
                const response = await newPerson.save();
                console.log('data saved ');
                res.status(200).json(response);
        } catch (err) {
                console.log(err);
                res.status(500).json({ error: 'internal server error '});
        }
});


//get all the persons data 
router.get("/", async (req, res) => {
        try {
                const persons = await Person.find();
                console.log("Data get successfully");
                res.status(200).json(persons);

        }catch (err) {
        console.log(err);
        res.status(500).json({ error: 'internal server error ' });
        }
});



router.get("/:workType",async(req,res)=>{

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
});


router.put('/:id',async(req,res)=>{

        try{
                const personId= req.params.id;
                const updatedPersonData = req.body;

                const response = await Person.findByIdAndUpdate(personId,updatedPersonData,{
                        new: true, // return the updated document 
                        runValidators:true

                })
                if(!response){
                        return res.status(404).json({error: " Person not found "})
                }
                console.log(' data updated ');
                res.status(200).json(response); 


        }catch(err){
                console.log(err);
                return res.status(500).json({error: " internal server error "})
        }
});


router.delete('/:id',async(req, res)=>{

        try{

                const personId = req.params.id;
                const response = await Person.findByIdAndDelete(personId);

                if(!response){
                        return res.status(404).json("boss Person not getting from Db ✖ ")
                }
                console.log("deleted succesfully ");
                res.status(200).json({message:'person deleted Succesfully '});


        }catch(err){
                console.log(err);
                res.status(500).json("internal Sever Error ");
        }



})



module.exports=router;
