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

        fullName: {
            type: String,
            default: "Enter Your Name"
        },

        profilePicture: {
            type: String,
            default: ""
        },

        courses: {
            type: Array,
            default: ["CSC 4330"]
        },

        about: {
            type: String,
            max: 500,
            default: "Enter Some Information About Yourself"
        },

        major: {
            type: String,
            max: 50,
            default: "Computer Science"
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

        role: {
            type: String,
            default: "Student"
        }
    },

    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);