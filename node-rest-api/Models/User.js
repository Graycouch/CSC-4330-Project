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

        profilePicture: {
            type: String,
            default: "defaultProfilePicture.png"
        },

        coverPicture: {
            type: String,
            default: "defaultBackground.jpg"
        },

        courses: {
            type: Array,
            default: ["CSC 4330"]
        },

        about: {
            type: String,
            max: 200,
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
            default: "Baton Rouge"
        },

        zipCode: {
            type: String,
            max: 50,
            default: "70803"
        },

        hourlyRate: {
            type: Number,
            default: 15
        },

        role: {
            type: String,
            default: "Student"
        },

        university: {
            type: String,
            default: "LSU"
        }
    },

    { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);