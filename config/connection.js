const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb+srv://jasaddington:Mongo@classactivities.xmp67mu.mongodb.net/socialDB');

// Export connection 
module.exports = mongoose.connection;