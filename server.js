const app = require("express")();
const http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

const port = 3000;
http.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
