const getHcf = require('get-hcf')
const prompt = require('prompt-sync')() 


let a = Math.floor(Math.random() * 10) 
let b = Math.floor(Math.random() * 10)

let userAns = Number(prompt(`What is the Highest Common Factor of ${a} and ${b}?`))

if(isNaN(userAns)) {
    console.log("Your answer is invald")
}

const correctAns = getHcf(a,b)

if(userAns === correctAns){
    console.log("Correct!")
} else if (userAns !== correctAns){
    console.log("Wrong, try again.")
    console.log("The correct answer is " + correctAns)
}

