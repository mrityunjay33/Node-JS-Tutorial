const fs = require('fs');

const http = require("node:http");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url);
  res.setHeader("Content-Type", "text/html");
  if (req.url == "/") {
    res.statusCode = 200;
    res.end(
      "<h1> This is code With Mjay</h1> <p> Hey, this is the way to rock the world! </p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.end("<h1> About Phani</h1> <p> Hey, this is about Phani ka fun! </p>");
  }else if (req.url == "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync('index.html');
    res.end(data.toString());
  } else {
    res.statusCode = 404;
    res.end("<h1>Not Found </h1>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
