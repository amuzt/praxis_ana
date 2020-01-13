const mongoose  = require("mongoose")
var host        = "mongodb://localhost:27017/day6"

mongoose.connect(host, {
    'useNewUrlParser': true,
    'useUnifiedTopology': true

})

mongoose.set('useCreateIndex', true)