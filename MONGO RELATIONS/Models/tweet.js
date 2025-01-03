const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/relationshipDemo',{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Database connected")
})

.catch((err)=>{
    console.log("Mongoose Connection Error")
    console.log(err);
})

const OwnerSchema = new mongoose.Schema({
    ownername : String,
    age: Number
})

const tweetSchema = new mongoose.Schema({
    title:String,
    likes:Number,
    owner:{type:mongoose.Schema.Types.ObjectId, ref:"Owner"} //child stores the reference of parent
})

const Owner = mongoose.model("Owner",OwnerSchema);
const Tweet = mongoose.model("Tweet",tweetSchema);

const makeATweet = async()=>{
      const u = new Owner({
        ownername:"dikshant_kanela",
        age:20
      })

      const tweet1 = new Tweet({
        title:"Here is my new Virtus GT!",
        likes:1000
      })

      tweet1.owner = u;
      const resOwner = await u.save();
      const resTweet = await tweet1.save();
      console.log(resTweet);
}

// makeATweet();

const newTweet = async()=>{
    const owner = await Owner.findOne({ownername:"dikshant_kanela"});
    const tweet2 = new Tweet({
        title:"I just bought an Audi Q7",
        likes:99999

    })

    tweet2.owner = owner;
    const res =  await tweet2.save();
}

newTweet();

