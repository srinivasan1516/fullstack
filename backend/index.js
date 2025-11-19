const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.send("Hello From Backend");
});

app.listen(3000, () => console.log("Backend Running"));
