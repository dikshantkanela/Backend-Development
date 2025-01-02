const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected")
})

.catch((err)=>{
    console.log("Mongoose Connection Error")
    console.log(err);
})

const userSchema = new mongoose.Schema({
    first:String,
    last:String,
    addresses:[ // array of obj as we can have multiple saved addresses for a user
        {
            _id:false, // avoid getting id of the addresses we just want id of user
            street:String,
            city:String,
            state:String,
            country:String
        }
    ]
})

const User = mongoose.model("User",userSchema);

const makeAUser = async()=>{
    const user = new User({
        first:"Marry",
        last:"Gabba"
    })
    user.addresses.push({
        street:"123 Seasame",
        city:"New York",
        state:"NY",
        country:"USA"
    })

    const res = await user.save()
    console.log(res);

}

makeAUser();

const insertAnAddress = async(id)=>{
    const user = await User.findById(id);
    if (!user) {
        console.log("User not found");
        return;
      }
    user.addresses.push({
        street:"221 Jane",
        city:"Oklahoma",
        state:"Oklahoma",
        country:"USA"
    })
    const res = await user.save();
    console.log(res);
}

insertAnAddress('6776c2e46e1cd379b25a0a92')