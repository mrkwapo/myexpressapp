const express = require('express')
const app = express()
const port = process.env.PORT||8080

app.use('/', express.static("public"));
//this always uses the first matching the toute used in browser
app.get('/', function(req, res){
    res.send('I love my life')
})

app.get('/api', function(req,res){
    const userName = req.query.username;
    const userId = req.query.id;
    const message = req.query.message;
    console.log(userName);
    const reply = `${userName} with id of ${userId} is saying ${message}`;
    res.send(reply);
    console.log(reply);
})
//to use a parameter type in the value without the key after the route ex .../api/username
app.get('/showprofile/:username', function(req,res) {
    const user = req.params.username;
    console.log(`${user}'s profile`);
     res.send(`${user}'s profile`);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

