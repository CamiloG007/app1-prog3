const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
	course:{type: mongoose.Schema.Types.ObjectId, 
	ref: "coll_course", 
	required: true},
	period:{type: mongoose.Schema.Types.ObjectId,
	ref: "coll_period", 
	required: true},
	teacher:{type: mongoose.Schema.Types.ObjectId, 
	ref: "coll_teacher", 
	required: true},
	number:{type: "Number", 
	required: true}
});

module.exports = groupSchema;                                                                                                                                                                                                                            