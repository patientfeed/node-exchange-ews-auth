# exchange-ews-auth

Lightweight authentication against a Microsoft Exchange server.

## Installation
````sh
$ npm install --save exchange-ews-auth
````


## Getting Started
````js
var exchanger = require('exchange-ews-auth')
	, server: 'mail.example.com'
    , user: 'alan@example.com'
    , password: 'password123';

exchanger.authenticate(server,user,password,function(success,err){
    if(success){
        // woohoo!
    } else {
        // failed
    }
});
````
