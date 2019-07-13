const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const voteSchema = new Schema(
    {
        vote: {
            type: String,
            required: true
        },
        creator: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        post: {
            type: Schema.Types.ObjectId,
            ref: 'Post',
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Vote', voteSchema);