import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please provide title of the blog"],
    },
    content: {
      type: String,
      require: [true, "Please provide content of the blog"],
    },
    email: {
      type: String,
      require: [true, "Please provide author email"],
    },
    imageUrl: {
      type: String,
    },
    // date: { type: Date, default: Date.now() },
  },
  {
    timestamps: true,
  }
);

const Blog = mongoose.models?.Blog || mongoose.model("Blog", blogSchema);

export default Blog;
