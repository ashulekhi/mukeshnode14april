/**
 * Created by ashu_dev on 14/04/17.
 */


var User = require('./user.model');

exports.createUser = function(req,res){



    var user = new User({
        name:'mukes',
        age:25
    });

    user.save(function(err,data){
        if(err){
            console.log('errrrrrrrrrr' ,err);
        }
        console.log('data' , data);

        res.end('user ccreation');
    })



  /*  User.insert(user,function(err,data){
        if(err){
            console.log('errrrrrrrrrr' ,err);
        }
        console.log('data' , data)

        req.send('user ccreation')
    })
*/

};


exports.getAllUsers = function(req,res){

    console.log('reached here');



    User.find({} ,function(err,data){
        if(err){
            console.log('errrrrrr' , err);
        }
        console.log('users' , data);
        res.send(200 , data);
    })
}