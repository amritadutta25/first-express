// import express library
const express = require("express")

// create express app object
const app = express()

//********************* 
//GREETINGS
//*********************

// :name? - the ? makes the param optional
app.get("/greeting/:name?", (req, res) => {

    // getting the param object
    const paramObj = req.params

    // getting the keys of the pram object
    const keys = Object.keys(paramObj)
    // console.log(paramObj)

    // if the paramObj has a value for its 'name' key
    if (paramObj['name']) {
        res.send(`Wow! Hello there, ${paramObj.name}`)
    }
    else {
        res.send("Hello, stranger")
    }
})


//********************* 
//TIP CALCULATOR
//*********************
app.get("/tip/:total/:tipPercentage", (req, res) => {

    const tipAmt = (req.params.total)*(req.params.tipPercentage/100)
    res.send(`${tipAmt}`)
})






// app listener
app.listen(3000, () => {console.log('Server listening on port 3000')})

