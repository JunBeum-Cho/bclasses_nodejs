import express from "express";
import session from "express-session";
import path from "path"
import login from "./routers/login"
import api from "./routers/api"

let app = express();
app.listen(3001, function () {
  console.log("Express server has started on port 3001");
});

app.use(express.static(path.join(__dirname, "/")))
app.use(express.json());
app.use(
  session({
    secret: "@#@$bclass#@$#$",
    resave: false,
    saveUninitialized: true
  })
);

app.use('api', api)
app.use("/login", login)
app.get("/", function(req, res) {
    res.status(200).send("landing page")
})