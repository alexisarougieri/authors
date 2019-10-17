const mongoose = require("mongoose");

let authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Author's name is required."],
        minlength: [3, "Name must be a minimum of 3 characters long."],
    }
}, {timestamps: true});

mongoose.model("Author", authorSchema);