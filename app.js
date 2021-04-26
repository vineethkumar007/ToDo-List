const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

let items = [];
let workItems = [];

app.get("/", (req, res) => {

  res.render("list", {
    listTitle: date.getDate(),
    listItems: items
  });

});

app.get("/work", (req, res) => {

  res.render("list", {
    listTitle: "Work",
    listItems: workItems
  });

});

app.get("/about", (req, res) => {
  res.render("about");
})

app.post("/", (req, res) => {

  let item = req.body.newItem;
  if(req.body.list === "Work"){
    workItems.push(item);
    res.redirect("/work");
  }else{
    items.push(item);
    res.redirect("/");
  }

});


app.listen("3000", () => {
  console.log("Server is running at port 3000");
});
