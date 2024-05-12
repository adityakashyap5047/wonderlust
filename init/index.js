const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/wonderlust");
};

main()
    .then(()=> {
        console.log("connected to the db");
    })
    .catch((err)=> {
        console.log(err);
    });
    
const initDb = async () => {
    await Listing.deleteMany({});
    initData.data = initData.data.map((obj) => ({...obj, owner: "663e87767b7d5400fe7aa451"}));
    await Listing.insertMany(initData.data);
    console.log("data was initializes successfully!!!");
}

initDb();