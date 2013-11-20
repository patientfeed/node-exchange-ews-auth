# rackspace-ews-auth

Lightweight authentication against a Rackspace hosted Microsoft Exchange account.

## Installation
````sh
$ npm install --save rackspace-ews-auth
````

## Getting Started
````js
var rackspace = require('rackspace-ews-auth');

rackspace.authenticate(myUsername,myPassword,function(success,err){
    if(success){
        // woohoo!
    } else {
        // failed
    }
});
````