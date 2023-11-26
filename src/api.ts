import express from "express";

const app = express();
const port = process.env.port ?? "3001";

app.get("/trigger", (_, res) => {
  res.status(304).header("Access-Control-Allow-Origin", "*").send();
});

app.listen(port, () => console.log(`Listening on ${port}`));
