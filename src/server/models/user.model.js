const { Schema, model } = require('mongoose');

const User = model("User",
    new Schema({
        username: String,
        email: String,
        password: String,
        roles: [
            {
                type: Schema.Types.ObjectId,
                ref: "Role"
            }
        ]
    })
);

// roles is an array that contains ids in roles collection as reference.

module.exports = User;
