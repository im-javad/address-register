import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const response = await axios.get(
        "https://stage.achareh.ir/api/karfarmas/address",
        {
          headers: {
            Authorization: "Basic MDk4MjIyMjIyMjI6U2FuYTEyMzQ1Njc4",
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch data" });
    }
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
