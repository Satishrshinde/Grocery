const express = require("express");
const app = express();
const server = 5000;
app.get('/', (req, resp) => {
  resp.send("Server is running")
})

app.listen(server, () => { console.log("server is running on 5000") });