const mongoose = require("mongoose");

const vehiculoSchema = new mongoose.Schema({
	idmarca:{type: mongoose.Schema.Types.ObjectId, 
		ref: "coll_idmarca", required: true},
	idproveedor:{type: mongoose.Schema.Types.ObjectId, 
		ref: "coll_idproveedor", required: true},
	idcategoria:{type: mongoose.Schema.Types.ObjectId, 
		ref: "coll_idcategoria", required: true},
	color:{type: "String", 
	required: true, 
	},
	modelo:{type: "String", 
	required: true, 
	},
	serieChasis:{type: "String", 
	required: true},
	serieMotor:{type: "String", 
	required: true},
	precio:{type: "number", 
	required: true},
	descuento:{type: "number", 
	required: true},
	estado:{type: "String", 
	required: true}
});

module.exports = vehiculoSchema;