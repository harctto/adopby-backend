const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();
const cors = require("cors");
let port = process.env.PORT || 3000;

var corsOptions = {
    origin: [
        "http://localhost:3000",
    ],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// PATH_API
app.use("/", require("./routes/api.js"));

app.listen(port, () => {
  console.log(`Server is listening ${port}.....`);
});