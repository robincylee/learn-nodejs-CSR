const repo = require('./repo');
//api layer to business logic that normally contain methods of data manipulating or database handling
//service should only be the one access to repo
  module.exports = {
      create_newuser
  }

  function create_newuser(req,callback){
     repo.input_new_user(req.db_info, callback) //retrieve db_info from request, pass callback
  }