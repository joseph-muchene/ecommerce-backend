const mongoose = require("mongoose");
const { ObjectId } = mongoose.Types;

const ReviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 20,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      maxlength: 50,
    },
    size: {
      type: String,
      maxlength: 20,
    },
    color: {
      type: String,
      required: false,
    },
    numReviews: {
      type: String,
    },
    category: {
      type: ObjectId,
      ref: "Category",
    },
    reviews: [ReviewSchema],
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
