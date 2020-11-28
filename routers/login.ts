import express from "express";
import session from "express-session";
import database from "../userinfoDB.json"

let login = express.Router()

login.post("/", function(req, res) {
        let id = req.body.id
        let password = req.body.password

        if(!id || !password) {
            res.status(203).send("id or pass is missing")
        } else if (!database[id] || database[id].password !== password) {
            res.status(203).send("user info does not exist")
        } else {
            req.session["userid"] = database[id].userid
            res.status(200).send("login successful")
        }
    }
)

login.get("/auth", function(req, res) {
    if(req.session["userid"]) {
        res.sendStatus(200)
    } else {
        res.sendStatus(203)
    }
})

export default login