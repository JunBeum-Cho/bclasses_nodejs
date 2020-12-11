import jwt from 'jsonwebtoken'
import { decode } from 'querystring'

const token = jwt.sign({userid: "junbuemc"}, "whwnsqja", {expiresIn: '5000'})
console.log("token",token)

const decoded = jwt.verify(token, "whwnsqja", (err, decoded)=> {
    if(err) {
        console.log("123",err.name)
    }
    console.log("13413243124123", decoded)
})

// const decoded = jwt.verify(token, "whwnsqja")
// console.log("decoded", decoded)


for (let i = 0; i < 3000000000; i++) {

}

console.log("asdf")
const decoded2 = jwt.verify(token, "whwnsqja2", (err, decoded)=> {
    console.log("!@#!@#",err.name)
    console.log("!@#!@#@#@#!", decoded)
})
// console.log("decoded", decoded2)