const mongoose = require('mongoose');
const { findOne } = require('../../MongoDb/Connection/Models/products');
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

const farmSchema = new mongoose.Schema({
    name:String,
    city:String,
    products:[{type:mongoose.Schema.Types.ObjectId,ref:'Product'}]
    // this product key of the model has a reference of the previous product model!
})
const Product = mongoose.model('Product',productSchema);
const Farm = mongoose.model("Farm",farmSchema);


// Product.insertMany([   JUST SOME INITIAL DATA
//     {name:"Goddess Melon", price:4.99,season:"Summer"},
//     {name:"Grapes", price:3.99, season:"Winter"},
//     {name:"Asparagus", price:5.99, season:"Spring"}
// ])

// const makeAFarm = async()=>{
//     const farm = new Farm({
//         name:"Full Belly Farms",
//         city:"Guindia"   // abhi products baaki hai haan
//     })
//     const prod = await Product.findOne({name:"Goddess Melon"})
//     farm.products.push(prod); // we have used the reference of the melon product
//     const res = await farm.save();
//     console.log(res);
// }

// makeAFarm();
// SIMPLE FUNDA : DUSRE MODEL ME FIND KRO AUR PUSH KRO 
const addAProduct = async()=>{
    const farm = await Farm.findOne({name:"Full Belly Farms"});
    const product = await Product.findOne({name:"Grapes"});
    farm.products.push(product);
    const res = await farm.save();
    console.log(res);
}

addAProduct();
