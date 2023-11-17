// import express from "express";
// import next from "next";
// import dalleRoutes from "./routes/dalle.routes.mjs";

// const PORT = process.env.PORT || 3000;
// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });
// const handle = app.getRequestHandler();

// app
//   .prepare()
//   .then(() => {
//     const server = express();
//     // const showRoutes = require("./routes/index.js");

//     server.use("/api/v1/dalle", dalleRoutes);

//     server.get("/yeah", (req, res) => {
//       return res.end("Just testing out more routes to see");
//     });

//     server.get("*", (req, res) => {
//       return handle(req, res);
//     });

//     server.listen(PORT, (err) => {
//       if (err) throw err;
//       console.log(`> Ready on ${PORT}, we are listening`);
//     });
//   })
//   .catch((ex) => {
//     console.error(ex.stack);
//     process.exit(1);
//   });
