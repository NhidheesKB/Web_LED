export default function handler(req, res) {
    if (req.method === "POST") {
      const { name, message } = req.body; // Get data from request body
      return res.status(200).json({ success: true, data: { name, message } });
    }
  
    return res.status(405).json({ error: "Method Not Allowed" });
  }
  