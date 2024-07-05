const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//Middleware 
app.use(bodyParser.json());
app.use(cors());

const questions = require("./routes/api/questions");
app.use("/api/questions", questions);

const port = 5000;

app.listen(port, () => console.log("Server is running on " + port))