const repo = require('./repo');
//api layer to business logic that normally contain methods of data manipulating or database handling
//service should only be the one access to repo
const mysql = require('mysql'); //example database connector

var con = mysql.createConnection({
    host: "ip",
    port: `${process.env.db_port}`,
    user: `${process.env.db_user}`,
    password: `${process.env.db_pass}`,
    database: `${process.env.db_name}`
  });

  module.exports = {
      create_newuser
  }

  function create_newuser(target_db,callback){
      con.query(insert_query,(err,result)=>{
        if(err){

        }
      })
  }