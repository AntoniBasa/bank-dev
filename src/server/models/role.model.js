const { Schema, model } = require('mongoose');

const Role = model("Role",
    new Schema({
        name: String
    })
);

module.exports = Role;
