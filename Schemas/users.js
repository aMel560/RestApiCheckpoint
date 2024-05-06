import mongoose from "mongoose";
//on est entrain de creer le modele de document que schemas va recevoir avant de le verifier
const agriculteurSchema = new mongoose.Schema(
  {
    nom: {
      type: String,
      required: true,
    },
    prenom: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: "true",
    },
    role: {
      type: String,
      enum: ["admin", "agriculteur", "client"],
      default: "agriculteur",
    },
  },
  { timestamps: true }
);
export const user = mongoose.model("agriculteur", agriculteurSchema);
