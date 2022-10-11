require('dotenv').config()
const MongoClient = require('mongoDb').MongoClient;
const uri = "mongodb+srv://kjmelbourne217:kartikjangid217@prac4.uz6dxde.mongodb.net/?retryWrites=true&w=majority";
const client =  new MongoClient(uri,{ useNewUrlParser: true })
client.connect((err,db) => {
    if(!err) {
        console.log('MongoDB Connected')
    }
    else {
        console.log("DB Error: ", err);
        process.exit(1);
    }
})
exports.MongoClient = client;