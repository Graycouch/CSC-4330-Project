const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },

        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        },

        password: {
            type: String,
            require: true,
            min: 6
        },

        firstName: {
            type: String,
            default: ""
        },

        lastName: {
            type: String,
            default: ""
        },

        profilePicture: {
            type: String,
            default: ""
        },

        courses: {
            type: Array,
            default: []
        },

        description: {
            type: String,
            max: 500,
            default: ""
        },

        city: {
            type: String,
            max: 50,
            default: ""
        },

        zipCode: {
            type: String,
            max: 50,
            default: ""
        },

        hourlyRate: {
            type: Number,
            default: 0
        },

        isTutor: {
            type: Boolean,
            default: false
        }
    },

    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);