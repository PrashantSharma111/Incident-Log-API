import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js"
import incidentRoutes from "./routes/incidentRoutes.js"

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

connectDB();
app.use(express.json());
app.use('/incidents', incidentRoutes)

app.listen(port, () => console.log(`Server running on port ${port}`));