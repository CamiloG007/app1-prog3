/** Dto */
const userDto = require("../../model/dto/user.dto");
const config = require("config");
const helper = require("../helpers/general.helper");

exports.login = (req, res, next) => {
	let pass = helper.DescryptPassword(req.body.password);
	userDto.login({username: req.body.username}, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		if(data.length > 0){
			let pass = helper.DescryptPassword(data[0].password);
			if(req.body.password == pass){
				tk = helper.GenerateToken(data[0]);
				return res.status(200).json({token: tk});
			}else{
				return res.status(400).json({info: "username or password are incorrect"});
			}
		}
	});
};

exports.getAll = (req, res, next) => {
	userDto.getAll({}, user, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(200).json({info:data});
	});
};

exports.deletePeriod = () => {
	userDto.delete({_id: req.body.id}, user, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(204).json();
	});
};

exports.getByCode = (req, res, next) => {
	userDto.getByCode({code: req.params.code}, user, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(200).json({info:data});
	});
};