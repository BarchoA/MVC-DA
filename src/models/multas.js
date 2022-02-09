const mongoose = require('mongoose');


const { Schema } = mongoose;



const loanSchema = new Schema({
    user: { type: String, require: true },
    item: { type: String, require: true },
    startDate: { type: String, require: true },
    endDate: { type: String, require: true },
    deliveryDate: { type: String, require: true },
    state: { type: String, require: true }
});

module.exports = mongoose.model('Loan', loanSchema);