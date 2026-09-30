const http = require("http");

const server = http.createServer((req, res) => {
  // logging a message to the console
  if (req.method === "GET" && req.url === "/") {
    console.log("Hello from the Server!");

    res.end();
  }
});

server.listen(3000, () => {
  console.log(`Server running on localhost: 3000`);
});
