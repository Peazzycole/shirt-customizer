// import express from "express";
// import * as dotenv from "dotenv";
// import axios from "axios";

// dotenv.config();

// const router = express.Router();

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Hello from DALL.E Routes" });
// });

// router.route("/").post(async (req, res) => {
//   try {
//     const prompt = req.body;
//     const response = await generateImage(prompt);
//     const image = response.data.data[0].b64_json;

//     res.status(200).json({ photo: image });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ message: error });
//   }
// });

// async function generateImage(prompt) {
//   const url = "https://api.openai.com/v1/images/generations";

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
//   };

//   const data = {
//     model: "image-alpha-001",
//     prompt,
//     num_images: 1,
//     size: "1024x1024",
//     response_format: "b64_json",
//   };

//   return axios.post(url, data, { headers });
// }

// export default router;
