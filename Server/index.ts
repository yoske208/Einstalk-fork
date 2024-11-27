import express,  { Express }  from "express";
import cors from "cors"
import "dotenv/config";
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import router from "./src/Routers/puzzleRouter";
import loadInitialDataUser from "./InitialData/InitialDataUser";
import loadInitialDataPuzzele from "./InitialData/InitialDataPuzzeles";

const app : Express = express()

// loadInitialDataUser().catch(console.error);
// loadInitialDataPuzzele().catch(console.error);

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true  
}));

app.use(express.json());
app.use(cookieParser());
app.use(router);

mongoose.connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log(("Connected to MongoDB ")); 
  })
  .catch((error) => {
    console.error((`Error connecting to MongoDB:, ${error}`));  
  });

app.listen(process.env.PORT || 3040, () => {
    console.log((`Listening on: http://localhost:${process.env.PORT || 3040}`));  
});