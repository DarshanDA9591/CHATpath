const express = require("express");
const cors = require("cors");

const axios = require("axios");
axios.defaults.timeout = 10000;

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "ce4e55cb-cd62-4a13-8583-f7bd5d5ca719" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    // return res.status(e.response.status).json(e.response.data);
  }
});
app.listen(3001);