const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config({ path: "./config.env" });
const app = require("./app");

const DATABASE = process.env.DB.replace("<PASSWORD>", process.env.DB_PASSWORD);

mongoose
  .connect(
    DATABASE,
    // .connect(process.env.DB_LOCAL,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Database connected with server."));

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server will start at port ${port}...`);
});
