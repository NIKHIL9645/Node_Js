//mongoose for Establish Db connection 
const mongoose=require('mongoose')

const menuItemsSchema =  new mongoose.Schema({

        name:{
                type: String,
                required: true
        },
        price:{
                type: Number,
                required:true
        },
        taste:{
                type: String,
                enum:['sweet','spicy','sour'],
                required: true
        },
        is_drink:{
                type:Boolean,
                default:false
        },
        ingredients:{
                type:[String],
                default:[]
        },
        num_sales:{
                type:Number,
                default:0
        }
        
})

        const MenuItemNik = mongoose.model('MenuItemsNik',menuItemsSchema);

        module.exports=MenuItemNik;

