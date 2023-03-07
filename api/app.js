import express from "express";
import dotenv from "dotenv";
import cors from "cors";
// import CustomersRouter from "./routes/customers.route.js";
// import BusinessesRouter from "./routes/businesses.route.js";
// import FeedbacksRouter from "./routes/feedbacks.route.js";
// import DashboardRouter from "./routes/dashboard.route.js";
// import AdminRouter from "./routes/admin.route.js";
import Category from "./routes/category.route.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.status(200);
  res.json({
    text: "Hello! This is E-shop Application API.",
    status: true,
  });
});

app.use("/api/category", Category);
// app.use("/api/businesses", BusinessesRouter);
// app.use("/api/feedbacks", FeedbacksRouter);
// app.use("/api/dashboard", DashboardRouter);
// app.use("/api/admin", AdminRouter);

export default app;
