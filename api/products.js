import { connectDB } from "./connect";

export default async function handler(req, res) {
  const db = await connectDB();
  const collection = db.collection("products");

  if (req.method === "GET") {
    const data = await collection.find().toArray();
    return res.status(200).json(data);
  }

  if (req.method === "POST") {
    const body = req.body;
    await collection.insertOne(body);
    return res.status(200).json({ message: "Added" });
  }
}