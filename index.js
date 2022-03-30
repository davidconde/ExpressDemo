const { response } = require('express');
const express = require('express');

const app = express();
const port = 3000;

/// /save?key=XXX&value=XXX
app.get('/save', (request, response) => {
    const params = request.query;
    const {saveKeys} = require("./storage");

    saveKeys(params.key, params.value);

    response.send("");
})

app.get('/', (request, response) => {

    const {readKeys} = require("./storage");

    readKeys().then(resp =>{
        console.log("function is done")
        response.send(resp);    
    }).catch(err => {
        console.log("function had an error: ", err)
        response.send("[]");
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});