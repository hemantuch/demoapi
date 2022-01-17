const { google } = require('googleapis');
// const express = require('express')
const key = require('./sheet.json');
const client = new google.auth.JWT(
    key.client_email,
     null,
     key.private_key,
     ['https://www.googleapis.com/auth/spreadsheets']
);
client.authorize(function(err,tokens){
    if(err){
            console.log(err);
            return;
    }
    else{
        console.log("connected");
    }
});