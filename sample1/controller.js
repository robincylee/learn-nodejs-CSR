const service = require('./service')
//first layer of architecture to fetch incoming request/action and pass 
//to service for application logic handling
module.exports = get_func;

function get_func(req,res){ //get request
    service.get_func_arg(req, //pass request to designated service 
        function (err, params){ //with callback
        if(err){throw err}
        res.json(params)
    }) 
    
}