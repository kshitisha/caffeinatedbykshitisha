const express = require("express");

const path = require("path");
const ejs = require("ejs");

const app = express();

const PORT = 4000;

const cartItems=0;

app.use(express.static("public"));
console.log(__dirname);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/home", (req, res) => {
    res.render("index");

});

app.get("/", (req, res) => {
  res.render("login");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});



app.get("/featured",  (req, res) => {
  res.render("featuredProducts"); 
});



app.get("/thanks",  (req, res) => {

  res.render("thanks");
});



app.get("/contactus", (req, res) => {
  res.render("contactus");
});

app.get("/cart", (req,res)=>{
res.render("cart" , {cartItems});

})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
