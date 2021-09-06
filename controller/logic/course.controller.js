/** Dto */
const courseDto = require("../../model/dto/course.dto");
const config = require("config");

exports.createCourse = (req, res, next) => {
	let course = {
		code: req.body.code,
		name: req.body.name
	};
	courseDto.create(course, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		let r = config.getCourse("roles").course;
		let user = {
			name: course.name,
			lastname: course.lastname,
			username: course.document,
			password: helper.EncryptPassword(req.body.password),
			role: r
		};
		userDto.create(user, (err, u) => {
			if(err){
				courseDto.delete({_id: data._id}, (e, data) =>{return res.status(400).json({error:err});});
			}
			res.status(201).json({info:data});
		});
	});
};

exports.updateCourse = (req, res, next) => {
	let course = {
		code: req.body.code,
		name: req.body.name
	};
	courseDto.update({_id: res.body.id}, course, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(201).json({info:data});
	});
};

exports.getAll = (req, res, next) => {
	courseDto.getAll({}, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(200).json({info:data});
	});
};

exports.getByCode = (req, res, next) => {
	courseDto.getByCode({Document: req.params.code}, course, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(200).json({info:data});
	});
};

exports.deletePeriod = () => {
	courseDto.delete({_id: req.body.id}, course, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(204).json();
	});
};

exports.getByCode = (req, res, next) => {
	courseDto.getByCode({code: req.params.code}, course, (err, data) =>{
		if(err){return res.status(400).json({error:err});}
		res.status(200).json({info:data});
	});
};