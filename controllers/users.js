import { user } from "../Schemas/users.js";

export const getuser = async (req, res) => {
  const response = await user.find();

  res.json(response);
};

export const Createuser = async (req, res) => {
  console.log("body", req.body);
  const response = await user.create(req.body);

  res.json(response);
};

export const deleteuser = async (req, res) => {
  const response = await user.deleteOne({ name: req.body.name });

  res.json(response);
};

export const updateuser = async (req, res) => {
  const response = await user.updateMany(
    { name: req.body.name },
    { name: "hamza", age: 21 }
  );

  res.json(response);
};
