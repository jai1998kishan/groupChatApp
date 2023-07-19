const express = require("express");
const fs = require("fs");


const router = express.Router();

router.get("/chat", (req, res, next) => {
  fs.readFile("username.txt", (err, data) => {
    if (err) {
      console.log(err);
      data = "No chat Exits";
    }
    res.send(`
    ${data}<form onSubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/chat" method="POST">
    
    <input type="text" id="message" name="message" placeHolder="message" required>
    <input type="hidden" name="username" id="username">
    <button>Send</button>
    </form>`);
  });
});

router.post("/chat", (req, res, next) => {
  // data.push(`{${req.body.username}:${req.body.msg}}`)
  // console.log(data);
  // console.log(`${req.body.username}:${req.body.msg}`);

  fs.writeFile(
    "username.txt",
    ` ${req.body.username} : ${req.body.message} `,
    { flag: "a" },
    (err) => {
      err ? console.log(err) : res.redirect("/chat");
    }
  );

  console.log(req.body);
  // res.redirect("/chat");
});

module.exports = router;
