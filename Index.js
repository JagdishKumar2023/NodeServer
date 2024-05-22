const http = require("http");

// Create a server http in the node

// const myServer = http.createServer((req, res) => {
//   console.log(req);
//   //   console.log("New Req Rec");
//   res.end("Hello From Server By myServer server Again");
// });

// Create Same server by new method node

const fs = require("fs");

const myServer = http.createServer((req, res) => {
  const log = `${Date.now()}: ${req.url} New Req Received\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("HomePage");
        break;
      case "/about":
        res.end(" I am from khandwa name is Sonu");
        break;
      default:
        res.end("404 Page not found");
    }
  });
});

// Run the port in with listen from 8000

myServer.listen(8000, () => console.log("server started!"));
