const mongoose = require("mongoose")

const itemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: true,
    },
    itemDescription: {
        type: String,
        required: true,
    },
    itemPrice: {
        type: Number,
        required: true,
    },
    itemImg: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Img",
        required: false,
    }
});

const itemModel = mongoose.model("Item", itemSchema)

module.exports = itemModel;