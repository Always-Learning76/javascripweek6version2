const express = require('express');
const app = express()
const port = 8000
const dbSetup = require('./database/setup.js')
app.use(express.json())
//SetUp db
dbSetup()

//SetUp Schema
const Home = require('./models/home')
const homeRoutes = require('./routes/homeRoutes.js')


app.use(homeRoutes)


Home.create({
    neighborhood: "Buckhead",
    cost: 500000,
    developer: " Conan Construction",
    category: "modern",
    purchaseLot: 50,
    tags: ["tag1", "another tag"]
}, (err, home) => {
    if(err) {
        console.log(err)
    } else {
        console.log(home)
    }
})

app.use(homeRoutes)
app.listen(port, ()=> console.log('App is listening on server'))