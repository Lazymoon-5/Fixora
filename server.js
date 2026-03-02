const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve public folder
app.use(express.static(path.join(__dirname, "../public")));

// Routes
const userRoutes = require("./routes/userRoutes");
const providerRoutes = require("./routes/providerRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const employeeRoutes = require("./routes/employeesRoutes");
const servicesRoutes = require("./routes/servicesRoutes");

app.use("/api/users", userRoutes);
app.use("/api/providers", providerRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/employees", employeeRoutes);
app.use("/api/services", servicesRoutes);

// Test Route
app.get("/", (req, res) => {
    res.send("Fixora Backend Running ✅");
});

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Fixora Server running on http://localhost:${PORT}`);
});