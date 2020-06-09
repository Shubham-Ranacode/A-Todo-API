// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",
(err,db)=>{
      if(err){
        return  console.log('Unable to connect to database server');
      }
      console.log('Connected to MongoDB server');

      db.collection('Users').findOneAndUpdate({
          _id:new ObjectID('5edf456ba4c9921efcd7e583')
      },{
        $set:{
          name:'Andrew'
        },
        $inc:{age:1}
      },{
        returnOriginal:false
      }).then((result)=>{
        console.log(result);
      });

    //   db.close();
});