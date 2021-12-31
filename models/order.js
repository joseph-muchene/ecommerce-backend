const Schema = require("mongoose").Schema;
const mongoose = require("mongoose");
const orderSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  products: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  address: { type: Number, required: true },
  status: {
    type: String,
    default: "Not processed",
    enum: ["Not processed", "delivered", "pending", "cancelled"],
  },
  amount: { type: Number, required: true },
});

module.exports = mongoose.model("order", orderSchema);
