const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/Product");

const app = express();

mongoose.connect("mongodb+srv://mountain_rat:Rohan1234@cluster0.eryiypc.mongodb.net/productCatalog")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

async function runExperiment(){

const product = new Product({
    name: "Premium Headphones",
    category: "Electronics",
    variants: [
        {
            sku: "HP-BL-001",
            color: "Black",
            price: 199.99,
            stock: 15
        },
        {
            sku: "HP-WH-001",
            color: "White",
            price: 209.99,
            stock: 8
        }
    ],
    reviews: [
        {
            userId: new mongoose.Types.ObjectId(),
            rating: 5,
            comment: "Excellent sound quality"
        }
    ],
    avgRating: 5
});

await product.save();
console.log("Product Added");

}

app.get("/", (req, res) => {
  res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

runExperiment();