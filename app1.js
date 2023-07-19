const express = require("express");
const bodyParser = require("body-parser");

const app1 = express();

const loginRouters=require('./routers/login');
const chatRouters=require('./routers/chat');



app1.use(bodyParser.urlencoded({extended:false}));

app1.use(loginRouters);
app1.use(chatRouters);

app1.use((req, res, next) => {
  res
    .status(404)
    .send('<h1>Page is not Found</h1>');
});

app1.listen(3000);
