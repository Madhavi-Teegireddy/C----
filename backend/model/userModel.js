const mongoose = require("mongoose");
const bcrypt = require('bcrypt');



const userSchema = mongoose.Schema({
    name: { type: String, required: true},
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true},
    pic: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jp"
    },
}, {
    timestamps: true,
})


userSchema.pre('save',async function (next) {
    if(!this.modified) {
        next()
    }
    const salt = await bcrypt.genSalt(10);
    this.password =await bcrypt.has(this.password, salt)
})
const User = mongoose.model("User", userSchema);

module.exports = User;