const models = require('../models');

module.exports = {
	get: {
		all: (req, res, next) => {
		  	models.Course.find().populate('author').sort({ createdAt: -1 })
		    	.then(courses => res.send(courses))
		    	.catch(next);
		},
		one: (req, res, next) => {
			const id = req.params.id;
		  	models.Course.find({ _id: id })//.populate('author')
		    	.then(course => res.send(course[0]))
		    	.catch(next);
		},
		authorPosts: (req, res, next) => {
			const { userId } = req.body;
			models.Course.find({ author: userId }).populate('author').sort({ createdAt: -1 })
				.then(courses => res.send(courses))
		    	.catch(next);
		}
	},
	post: {
		create: (req, res, next) => {
			const { title, description, image, userId } = req.body;

			models.Course.create({ title, description, image, author: userId })
			    .then((createdCourse) => {
			    	return Promise.all([
			          	models.User.updateOne({ _id: userId }, { $push: { courses: createdCourse } }),
			          	models.Course.findOne({ _id: createdCourse._id })
			        ]);
			    })
			    .then(([modifiedObj, courseObj]) => {
			        res.send(courseObj);
			    })
			    .catch(next);
		},
		edit: (req, res, next) => {
			const courseId = req.params.id;
			const { title, description, image } = req.body;
			models.Course.updateOne({ _id: courseId }, { title, description, image })
				.then(course => res.send(course))
				.catch(next);
		},
		delete: (req, res, next) => {
			const courseId = req.params.id;
			models.Course.deleteOne({ _id: courseId })
				.then((course) => res.send(course))
			    .catch(next);
		}
	}
}