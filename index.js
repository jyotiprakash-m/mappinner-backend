const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const pinRoute = require('./routes/pins')
const userRoute = require('./routes/users')
const app = express()
dotenv.config();

app.use(express.json())

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log('Mongodb Connected!')
}).catch((err) => console.log(err))


app.use("/api/pins", pinRoute);
app.use("/api/users", userRoute);
const PORT = process.env.PORT || 8800;
app.listen(PORT, () => {
    console.log('Backend server running!', PORT)
})