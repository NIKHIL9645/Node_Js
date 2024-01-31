const express = require('express')
const router = express.Router();
const MenuItemNik = require('./../Models/MenuItem')



router.post("/savemit", async (req, res) => {
        try {

                const data = req.body;
                const newmenuitem = new MenuItemNik(data);
                const response = await newmenuitem.save()
                console.log("Menu Items Data saved Succesfully ");
                res.status(200).json(response);
        } catch (err) {
                console.log(err);
                res.status(500).json({ err: "internal server error " });

        }
});




// get all the MenuItems

router.get("/getAll", async (req, res) => {

        try {

                const all = await MenuItemNik.find();
                console.log("Data Received Succesfully ");
                res.status(200).json(all);
        } catch (err) {

                console.log(err);
                res.status(500).json({ error: " Internal Sever Error " })
        }


});

router.get("/:taste", async (req, res) => {

        try {

                const taste =req.params.taste;
                if(taste=="sweet" || taste=="sour" || taste=="spicy"){
                const response = await MenuItemNik.find({taste:taste});
                console.log("Response get ✅✅");
                res.status(200).json(response);
                }
                else{
                        res.status(404).json({error:"Invalid Taste "});
                }
        } catch (err) {

                console.log(err);
                res.status(500).json({ error: " Internal Sever Error " })
        }


});

module.exports=router;