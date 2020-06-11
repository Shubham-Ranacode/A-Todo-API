const {ObjectID}=require('mongodb');


const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

// Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findByIdAndRemove('5ee1bbe35944f1bad8de5295').then((todo)=>{
    console.log('Deleted one is:',todo);
});