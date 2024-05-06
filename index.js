import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import routeruser from "./routes/users.js";
import bodyParser from "body-parser";

dotenv.config();

const app = express(); //creation de l'application

// les app.use s'executent avant chaque requete ce sont des middlewares
app.use(cors({ origin: "*" }));
app.use(bodyParser.json()); //on utilise bodyParser pour que le body ne soit pas undefined
//syntaxe de base pour connecter le backend avec l'api mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true, //
    useUnifiedTopology: true, //
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/user", routeruser); //integration des routers

//toujours executer cette commande
app.listen(process.env.PORT, () => {
  console.log(`app listening on port ${process.env.PORT}`);
});
