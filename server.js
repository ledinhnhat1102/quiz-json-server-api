const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

server.use(cors());
server.use(middlewares);
server.use(jsonServer.bodyParser);

server.use("/api", router);

const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log("JSON Server running on port", PORT);
});
