// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",
(err,db)=>{
      if(err){
        return  console.log('Unable to connect to database server');
      }
      console.log('Connected to MongoDB server');

      // db.collection('Todos').insertOne({
      //   text:'Something to do',
      //   completed:false
      // },(err,results)=>{
      //   if(err){
      //     return console.log('Unable to insert todo',err);
      //   }

      //   console.log(JSON.stringify(results.ops,undefined,2));

      // });

      //insert new doc into Users collection{name,age,location}
      // db.collection('Users').insertOne({
      //   name:'Divyansh',
      //   age:24,
      //   location:'USA'
      // },(err,results)=>{
      //   if(err){
      //     return console.log('Unable to insert Users',err);
      //   }
      //   console.log(results.ops[0]._id.getTimestamp());
      // });


      db.close();
});