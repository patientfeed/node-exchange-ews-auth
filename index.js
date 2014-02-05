var   curl = require('curlrequest')
    , domain = '/';


function handleResponse(err,stdout,meta){
    var responseCode = parseInt(stdout);
	console.log(stdout);
    return (!err && responseCode == 200);
}


module.exports = {

    authenticate: function(server,username,password,cb){

    	var url = "https://" + server + "/EWS/Exchange.asmx";
		console.log(url);
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
            user: username+':'+password,
			ntlm: true
        },responseHandler);

    }

};
