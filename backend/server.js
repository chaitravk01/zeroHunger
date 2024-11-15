const express = require("express");
const dotenv = require("dotenv");
const logger = require("pino")();
const mongoose = require("mongoose");
mongoose.set('strictQuery', true)
const cors = require("cors");
const expressSession = require("express-session");
const connectDB = require('./config/db')

//Import Routes to here
const AddProductsRoutes = require("./routes/AddProductsRoutes");
const RegRestaurantRoutes = require("./routes/RegRestaurantRoutes");
const OrderPaymentRoutes = require("./routes/OrderPaymentRoutes");
const UserRoutes = require("./routes/UserRoutes");
const DonatorRoutes = require("./routes/DonatorRoutes");
const OrganRoutes = require("./routes/OrganRoutes");
const ExhangeItemRoutes = require("./routes/ExchangeItemRoutes");
const SelfEmployeeRoutes = require("./routes/SelfEmployeeRoutes");

const app = express();
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

connectDB()
.then((result) => {
  console.log("Database connected successfully")
})
.catch((error) => {
  console.log("Error connecting databse")
})

app.use(express.json());
app.set("trust proxy", 1);
const sessSettings = expressSession({
  path: "/",
  secret: "oursecret",
  resave: true,
  saveUninitialized: true,
  cookie: {
    sameSite: false,
    secure: false,
    maxAge: 360000,
  },
});

app.use(sessSettings);
const PORT = process.env.PORT || 8000;


app.get("/", (req, res) => {
  res.status(200).json({ messsage: "Server is running!" });
});

// Implement the routes from here
app.use("/api/AddProducts", AddProductsRoutes);
app.use("/api/RegRestaurant", RegRestaurantRoutes);
app.use("/api/OrderPayments", OrderPaymentRoutes);
app.use("/api/Users", UserRoutes);
app.use("/api/AddDonator", DonatorRoutes);
app.use("/api/AddOrgan", OrganRoutes);
app.use("/api/AddEmployee", ExhangeItemRoutes);
app.use("/api/AddExchangeItem", SelfEmployeeRoutes);

app.listen(PORT, () => {
    logger.info(`Server is running on PORT: ${PORT}`);
  });