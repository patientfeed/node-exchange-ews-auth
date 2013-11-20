# rackspace-ews-auth

Lightweight authentication against a Rackspace hosted Microsoft Exchange account.

## Installation
````sh
$ npm install --save rackspace-ews-auth
````

## Getting Started
````js
// Create the client connection to the rackspace EWS server over http (curl)
var RackspaceAuthClient = require('rackspace-ews-auth');
var rackspace = new RackspaceAuthClient('https://connect.emailsrvr.com/EWS/Exchange.asmx');

// Try to authenticate user
rackspace.authenticate(myUsername,myPassword,function(success,err){
    if(success){
        // woohoo!
    } else {
        // failed
    }
});
````