const express = require("express");
const app = express();

//Middleware
app.use(express.static("public"));

//Setings
app.set("view engine", "ejs");

//Routing - blog
app.use(require("./routes/blogRoutes"));

//Routing - admin
app.use("/admin", require("./routes/adminRoutes"));

//Basic routing
app.get("/", (req, res) => {
  res.render("home", {
    title: "Home page",
  });
});

app.listen(3000, () => {
  console.log(`Server is running on localhost:3000`);
});
