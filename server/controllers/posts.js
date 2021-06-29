import PostMessage from "../models/postMessage.js";

// GET
export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
    // 200: OK
  } catch (error) {
    res.status(404).json({ message: error.message });
    // 404: Not Found
  }
};

// POST
export const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.status(201).json(newPost);
    // 201: Created
  } catch (error) {
    res.status(409).json({ message: error.message });
    // 409: Conflict
  }
};
