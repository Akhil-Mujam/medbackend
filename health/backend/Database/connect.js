const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017').then(
    data => console.log("database connected..")
)
.catch(   
    err => console.log("error")
)