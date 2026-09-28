const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://jitendraumore99:YLpYH7o4r8xgLFM6@animecom.ukiff.mongodb.net/Furstore", {
    
})
.then(() => {
    console.log("MongoDB connected successfully");
})
.catch((err) => {
    console.error("MongoDB connection error:", err);
});
