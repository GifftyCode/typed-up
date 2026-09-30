const http = require("http");

const server = http.createServer((req, res) => {
  // logging a message to the console
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello from the Server!");

    res.end();
  }

  // returning html
  if (req.method === "GET" && req.url === "/hello") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World!</h1>");
    console.log(req.url);
    res.end();
  }

  // returning json
  if (req.method === "GET" && req.url === "/courses") {
    res.writeHead(200, { "content-Type": "application/json" });
    const data = {
      name: "Learning Nodejs + typescript",
      desc: "Learning from the best tutor",
    };
    console.log(req.url);
    res.end(JSON.stringify(data));
  }
});

server.listen(3000, () => {
  console.log(`Server running on localhost: 3000`);
});
