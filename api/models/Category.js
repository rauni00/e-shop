import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    image: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      required: true,
    },
  },
  {
    collection: "category",
  }
);

export default mongoose.model("category", CategorySchema);
