const mongoose = require('mongoose')
console.log(process.env.DB);

const dbUrl = process.env.DB;
 
function mongoConnect() {
    mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('Connected to MongoDB successfully...!'))
        .catch((err) => console.error('Error connecting to MongoDB:', err));
}

module.exports = mongoConnect()