const mongoose = require('mongoose');

const hospitalSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        addressLine1: {
            type: String,
            required: true
        },
        addressLine2: {
            type: String
        },
        city: {
            type: String,
            required: true
        },
        pincode: {
            type: String,
            required: true
        },
        specializedIn: [{
            type: String,
        }],
        assignedDoctors: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Doctor"
        }
    },
    {timestamps: true});

export const Hospital = mongoose.model('Hospital', hospitalSchema);