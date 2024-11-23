import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI as string;
const dbConnect = async () => {
  await mongoose
    .connect(MONGO_URI)
    .then(() => console.log("detabase succesfuly connect "))
    .catch((err) => console.log(err));
};
export default dbConnect;
