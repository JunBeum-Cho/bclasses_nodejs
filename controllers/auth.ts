
import express from "express";
import database from "../userinfoDB.json"
import jwt from 'jsonwebtoken'

const SECRET_KEY = "whwnsqja"

const auth = function(req, res, next) {
    try {
        const clientToken = req.cookies.authtoken;
        console.log("req.cookies.authtoken", clientToken)
        const decoded = jwt.verify(clientToken, SECRET_KEY);
        console.log("decode", decoded['userid'], decoded)
        if (decoded) {
            res.userid = decoded['userid'];
            next();
        } else {
            res.status(401).json({ error: 'unauthorized' });
        }
    } catch (err) {
        res.status(401).json({ error: 'token expired' });
    }
}

export default auth