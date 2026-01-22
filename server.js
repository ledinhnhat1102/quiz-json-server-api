const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("database.json");
const middlewares = jsonServer.defaults();
const cors = require("cors");

// 👉 ENABLE CORS
server.use(cors());

// 👉 Default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// 👉 Body parser (quan trọng với POST)
server.use(jsonServer.bodyParser);

// 👉 API routes
server.use("/api", router);

// 👉 PORT cho Render
const PORT = process.env.PORT || 3002;
server.listen(PORT, () => {
  console.log("JSON Server running on port", PORT);
});
