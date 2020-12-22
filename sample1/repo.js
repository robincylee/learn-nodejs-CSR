const mysql = require('mysql'); //example database connector

var con = mysql.createConnection({
    host: "ip",
    port: `${process.env.db_port}`,
    user: `${process.env.db_user}`,
    password: `${process.env.db_pass}`,
    database: `${process.env.db_name}`
  });

module.exports ={
    input_new_user
}
//gateway between your domain/business layer and data mapping layer

function input_new_user(db_target, callback){
    //database connector function

    con.query(insert_query,(err,result)=>{
        if(err){
            callback(err)
        }
        callback(null,result)
      })

}