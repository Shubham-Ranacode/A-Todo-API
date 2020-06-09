// const MongoClient=require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb');


MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp",
(err,db)=>{
      if(err){
        return  console.log('Unable to connect to database server');
      }
      console.log('Connected to MongoDB server');

    //   db.collection('Todos').find({_id:new ObjectID('5edf4c9d55cc9895291a721b')}).toArray().then((docs)=>{
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs,undefined,2));
    //   },(err)=>{
    //       console.log('Unable to fetch',err);
    //   });

    db.collection('Users').find({name:'Divyansh'}).count().then((count)=>{
        console.log(`Users  count:${count}`);
        
      },(err)=>{
          console.log('Unable to fetch',err);
      });

    //   db.close();
});