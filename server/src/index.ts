import express from "express";

const app = express();

app.use(express.json());

app.get("/params/:id", (req, res) => {
  res.json(req.params.id);
});

app.listen(3000);
