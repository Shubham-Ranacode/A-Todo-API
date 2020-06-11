const {ObjectID}=require('mongodb');


const {mongoose}=require('./../server/db/mongoose');
const {Todo}=require('./../server/models/todo');
const {User}=require('./../server/models/user');

// var id='5ee0aa9eb4b7a71ac0178a081';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }


// Todo.find({
//     _id:id
// }).then((todos)=>{
//     console.log('Todos',todos);
// });

// Todo.findOne({
//     _id:id
// }).then((todo)=>{
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo)=>{
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id',todo);
// }).catch((e)=>{
//     console.log(e);
// });
var id='5edf6afd8c89094404b30ad71';


User.findById(id).then((user)=>{
    if(!user){
        return console.log('Id not found');
    }
    console.log('User by Id',user);
}).catch((e)=>{
    console.log(e);
});