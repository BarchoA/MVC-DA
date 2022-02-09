const mongoose = require('mongoose')

const url = `mongodb+srv://barchoa:admin@cluster0.vieqo.mongodb.net/databases?retryWrites=true&w=majority`

const connectionParams = {
    useNewUrlParser: true,
}
mongoose.connect(url, connectionParams)
    .then(() => {
        console.log('Connected to database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })