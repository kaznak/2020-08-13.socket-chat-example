const app = require("express")();
const http = require("http").createServer(app);

app.get("/", (req, res) => {
  res.send("<h1>Hello world</h1>");
});

const port = 3000;
http.listen(port, () => {
  console.log(`http://localhost:${port}/`);
});
