var express = require('express');
var app = express();
app.get('/',function(req, res){
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>M11207007</title>
            <style>
                body {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                    font-family: Arial, sans-serif;
                    font-size: 32px;
                }
            </style>
        </head>
        <body>
            M11207007
        </body>
        </html>
    `);
});

var server = app.listen(3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("example app listening at 'http://%s:%s'",host,port);

    
});