// import express library
const express = require("express")

// create express app object
const app = express()

//********************* 
//GREETINGS
//*********************

// :name? - the ? makes the param optional
app.get("/greeting", (req, res) => {
    res.send("Hello, stranger")
})

app.get("/greeting/:name", (req, res) => {

    // getting the param object
    const paramObj = req.params
    res.send(`Wow! Hello there, ${paramObj.name}`)
})

// or do both the ROUTES above in one Route
// app.get("/greeting/:name", (req, res) => {
//     // getting the param object
//     const paramObj = req.params
//     // if the paramObj has a value for its 'name' key
//     if (paramObj['name']) {
//         res.send(`Wow! Hello there, ${paramObj.name}`)
//     }
//     else {
//         res.send("Hello, stranger")
//     }
// })


//********************* 
//TIP CALCULATOR
//*********************
app.get("/tip/:total/:tipPercentage", (req, res) => {

    const tipAmt = (req.params.total)*(req.params.tipPercentage/100)
    res.send(`${tipAmt}`)
})


//********************* 
//MAGIC 8 BALL
//*********************
const magicResponses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get("/magic/:ques", (req, res) => {

    // getting the 'ques' param value
    const ques = req.params.ques

    // generating random number to get a random Magic 8 response
    const randomIndex = Math.floor(Math.random() * magicResponses.length)

    res.send(`${ques}
            <h1>${magicResponses[randomIndex]}</h1>`)

})




// app listener
app.listen(3000, () => {console.log('Server listening on port 3000')})

