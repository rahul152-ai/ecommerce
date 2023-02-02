// mongodb+srv://Rahul:<password>@cluster0.9mhpmcb.mongodb.net/?retryWrites=true&w=majority
const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const ProductRoute = require("./routes/product");
const orderRoute = require("./routes/order");
const cartRoute = require("./routes/cart");
const stripeRoute = require("./routes/stripe");

const cors = require("cors");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("DB Connection sucfessfull!"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", ProductRoute);
app.use("/api/orders", orderRoute);
app.use("/api/carts", cartRoute);
app.use("/api/checkout", stripeRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

// KBAylHSQLiGrmww2;
