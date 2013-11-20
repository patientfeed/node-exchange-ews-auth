var   curl = require('curlrequest')
    , url = "https://connect.emailsrvr.com/EWS/Exchange.asmx"
    , domain = '/';


function handleResponse(err,stdout,meta){
    var responseCode = parseInt(stdout);
    return (!err && responseCode == 200);
}


module.exports = {

    authenticate: function(username,password,cb){

        // Bind a context for callback
        var responseHandler = function(cb){return function(err,stdout,meta){
            var success = handleResponse(err,stdout,meta);
            cb(success,err);
        }}(cb);

        curl.request({
            url: url,
            silent: true,
            'write-out': '%{http_code}\n',
            head: true,
            'output': '/dev/null',
            user: username+':'+password
        },responseHandler);

    }

};