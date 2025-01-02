const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected")
})

.catch((err)=>{
    console.log("Mongoose Connection Error")
    console.log(err);
})

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    season:{
        type:String,
        enum:['Spring','Summer', 'Fall', 'Winter']
    }

})

const Product = mongoose.model('Product',productSchema);
// Product.insertMany([
//     {name:"Goddess Melon", price:4.99,season:"Summer"},
//     {name:"Grapes", price:3.99, season:"Winter"},
//     {name:"Asparagus", price:5.99, season:"Spring"}
// ])

const farmSchema = new mongoose.Schema({
    name:String,
    city:String,
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}]
    // this product key of the model has a reference of the previous product model!
})
