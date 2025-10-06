const express = require('express');
const router = express.Router();

router.post("/", (req, res) => {
  const order = req.body; 
  console.log("🛒 New Order Received:");
  console.log(order);

  res.json({ message: "Order received successfully!", success: true });
});

module.exports=router