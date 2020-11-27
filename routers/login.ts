import express from "express";
import session from "express-session";
import database from "../userinfoDB.json"

let login = express.Router()

login.post("/", function(req, res) {
        let id = req.body.id
        let pass = req.body.pass

        if(!id || !pass) {
            res.status(203).send("id or pass is missing")
        } else if (!database[id] || database[id].password !== pass) {
            res.status(203).send("user info does not exist")
        }

        req.session["userid"] = database[id].userid
        res.status(200).send("login successful")
    }
)

login.get("/auth", function(req, res) {
    if(req.session["userid"]) {
        res.status(200).send("auth passed")
    } else {
        res.status(203).send("auth failed")
    }
})

export default login