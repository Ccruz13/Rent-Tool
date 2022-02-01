const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema ({
    name: {
        typr:String,
        required: true,
        trim: true
    }
});

const Category = mongoosr.model('category', categorySchema);

module.exports = Category;