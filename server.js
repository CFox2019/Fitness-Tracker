const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

const databaseUrl = "workoutdb";
const collections = ["workout", "exercise"];

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(require("./routes/htmlRoutes"));
app.use(require("./routes/workoutRoutes"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/workoutdb", 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
