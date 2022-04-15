const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://logindb:KDyZYo7QHzJbAePR@cluster0.2m3u4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',function(){
    console.log('connection successful');
}).catch((e) =>{
    console.log('no connection'+e);
})