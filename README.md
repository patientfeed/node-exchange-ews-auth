# rackspace-ews-auth

Lightweight authentication against a Rackspace hosted Microsoft Exchange account.

## Installation
````sh
$ npm install --save rackspace-ews-auth
````

## Getting Started
````js
var rackspace = require('rackspace-ews-auth')
    , user: 'alan@example.com'
    , password: 'password123';

rackspace.authenticate(user,password,function(success,err){
    if(success){
        // woohoo!
    } else {
        // failed
    }
});
````