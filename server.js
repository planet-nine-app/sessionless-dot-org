const express = require("express");

const app = express();

app.get("/clicked", (req, res) => {
console.log('foo');
  res.send('heyoooo');
});

app.use(express.static(__dirname));

app.listen(3000);
