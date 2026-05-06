const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => console.log("Conectado a MongoDB"))
  .catch(err => console.error(err));

const ItemSchema = new mongoose.Schema({
  nombre: String
});

const Item = mongoose.model("Item", ItemSchema);

app.get("/", (req, res) => {
  res.send("API funcionando 🚀");
});

app.post("/items", async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.json(item);
});

app.get("/items", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

app.listen(3000, () => {
  console.log("Servidor en puerto 3000");
});