const express = require("express");
const app = express();
const server = 5000;
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./user")

app.use(cors());
app.use(express.json());
const url = "mongodb+srv://satishrshinde2014:groceryapp2@grocery-cluster.sstaorz.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)

  .then(() => {
    console.log("DB connected");
  })
  .catch((error) => {
    console.log("Error connecting to database:", error);
  });
app.get('/', (req, resp) => {
  resp.send("Server is running")
})
app.post("/signup", async (req, res) => {
  const { username, email, password, age, number } = req.body;

  try {
    const user = await User.findOne({
      email: email
    });

    if (user) {
      res.send({ message: "User already registered" });
    } else {
      const newSignUp = new User({
        username,
        email,
        password,
        age,
        number
      });
      await newSignUp.save();
      res.send({ message: "Signed up successfully" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.listen(server, () => { console.log("server is running on 5000") }); 