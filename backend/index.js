// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/.env" });
}

const cloudinary = require("cloudinary");
const expressFileUpload = require("express-fileupload");
const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./Config/connection");
const userRoutes = require("./routes/userRoute");
const productRoute = require("./routes/productRoute");
const categoryRoute = require("./routes/categoryRoute");

// Body Parser
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

// Cookies Parser
app.use(cookieParser());

// Connect to DB
connectDB();

// JSON
app.use(express.json());

// File Uploads
app.use(expressFileUpload());

// Cloudinary Config
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET_KEY,
});

// Load Routes
app.use("/api/user", userRoutes);
app.use("/api/product", productRoute);
app.use("/api/category", categoryRoute);

// ✅ Serve Frontend ONLY in Production
if (process.env.NODE_ENV === "PRODUCTION") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
  });
}

// Start Server
app.listen(process.env.PORT, "localhost", () => {
  console.log(`Server Running At http://localhost:${process.env.PORT}`);
});
