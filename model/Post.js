import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  title: { type: String, required: true },
  extractDescription: { type: String, required: true },
  content: { type: String, required: true },
  author: {
    name: { type: String, required: true },
    photo: { type: String, default: null },
  },
  bannerImage: { type: String, default: null },
  thumbnailImage: { type: String, default: null },
  metaTitle: { type: String, required: true },
  metaDescription: { type: String, required: true },
  metaTags: { type: [String], default: [] },
  uploadDate: { type: Date, default: Date.now },
});

export default mongoose.models.Post || mongoose.model("Post", PostSchema);
