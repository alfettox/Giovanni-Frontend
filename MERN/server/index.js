const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });

// Define a simple schema for our data
const ItemSchema = new mongoose.Schema({
  name: String,
  price: Number
});

// Create a model based on the schema
const Item = mongoose.model('Item', ItemSchema);

// Define routes
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

app.post('/items', async (req, res) => {
  const item = new Item(req.body);
  await item.save();
  res.send(item);
});

app.put('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body);
  res.send(item);
});

app.delete('/items/:id', async (req, res) => {
  const item = await Item.findByIdAndDelete(req.params.id);
  res.send(item);
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
