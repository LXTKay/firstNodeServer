import http from "node:http";
import fs from 'fs/promises';

const server = http.createServer(async (req, res) => {
  //figure path:
  let data = null;
  switch(req.url){
    case "/index.html":
      data = await fs.readFile("index.html");
      break;
    case "/":
      data = await fs.readFile("index.html");
      break;
    case "/contact.html":
      data = await fs.readFile("contact.html");
      break;
    case "/about.html":
      data = await fs.readFile("about.html");
      break;
    default:
      data = await fs.readFile("404.html")
  };
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(data);
  res.end();
});

server.listen(8000);