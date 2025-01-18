import dbConnect from "../../lib/mongodb";
import Post from "../../model/Post";

export default async function handler(req, res) {
  await dbConnect();

  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const posts = await Post.find({}).sort({ _id: -1 }); 
        res.status(200).json({ success: true, data: posts });
      } catch (error) {
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    
    case "POST":
      try {
        console.log('api post method body',req.body)

        const post = new Post(req.body);
        await post.save()
        res.status(201).json({ success: true, data: post });
      } catch (error) {
        console.log('api post method errpr',error)
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(405).json({ success: false, message: "Method not allowed" });
      break;
  }
}
