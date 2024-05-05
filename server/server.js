const express = require('express');
const cors = require('cors');
import cookieParser from "cookie-parser";
import http from "http";

const mongoose = require('mongoose');
const path = require('path');
require('dotenv').config();

const app = express();
const dbConfig = require('./config/dbConfig');
const portfolioRoute = require('./routes/portfolioRoutes');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/api/portfolio', portfolioRoute);



const port = process.env.PORT || 5000;
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
      res.sendFile(path.join(__dirname, "client/build/index.html"));
  });
}
const server = http.createServer(app);
mongoose.connect(process.env.mongo_url).then(() => {
  console.log("Mongodb connected");
  server.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
}).catch((err) => {
  console.log({ err });
  process.exit(1);
});


// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });
