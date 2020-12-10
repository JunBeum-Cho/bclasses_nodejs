import jwt from 'jsonwebtoken'
import { decode } from 'querystring'

const token = jwt.sign({userid: "junbuemc"}, "whwnsqja", {expiresIn: '1000'})
console.log("token",token)


const decoded = jwt.verify(token, "whwnsqja")
console.log("decoded", decoded)


for (let i = 0; i < 3000000000; i++) {

}

const decoded2 = jwt.verify(token, "whwnsqja")
console.log("decoded", decoded2)