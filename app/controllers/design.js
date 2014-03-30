
var mongoose = require('mongoose')
  , Design = mongoose.model('Design')

var des = {
	"first": {
		access: "user.facebook.first_name",
		html: [
			'<div style="transform:rotate(-9deg);-ms-transform:rotate(-9deg);-webkit-transform:rotate(-9deg);"><div class="img" style="background-image: url(\'../../img/hello-name.png\');height:70px;"><div class="first-name" style="padding-top:28px;font-size:18px;font-family:\'Permanent Marker\', cursive;"><%= firstName %></div></div></div>',
			"The best +++ you know",
		]
	},
	"last": {
		access: "user.facebook.last_name",
		html: [
			"Proud to be a +++",
			"The +++ Clan"
		]
	},
	"college": {
		access: "properties.College.meta.short_name",
		designs: [
			"Dreaming of +++",
			"Proud graduate of +++",
			"I <3 +++"
		]
	},
	"concentration": {
		access: "properties.concentration.name", 
		html: [
			"+++ Nerd in",
			"+++s majors are the sexiest",
			"I spend all my time on +++"
		]
	},
	"work": {
		access: "properties.work.name",
		html: [
			"I work for +++",
			"I <3 +++",	
		]
	},
	"position": {
		access: "properties.position.name",
		html: [
			"Trust me, I'm a +++",
			"Have you met a +++ before?"
		]
	}
}



exports.designs = {
	"user.facebook.first_name": {
		access: "user.facebook.first_name",
		designs: [
			"Hello my name is +++",
			"The best +++ you know",
		]
	},
	"user.facebook.last_name": {
		access: "user.facebook.last_name",
		designs: [
			"Proud to be a +++",
			"The +++ Clan"
		]
	},
	"properties.College": {
		access: "properties.College.meta.short_name",
		designs: [
			"Dreaming of +++",
			"Proud graduate of +++",
			"I <3 +++"
		]
	},
	"properties.concentration": {
		access: "properties.concentration.name", 
		designs: [
			"+++ Nerd in",
			"+++s majors are the sexiest",
			"I spend all my time on +++"
		]
	},
	"properties.work": {
		access: "properties.work.name",
		designs: [
			"I work for +++",
			"I <3 +++",	
		]
	},
	"properties.position": {
		access: "properties.position.name",
		designs: [
			"Trust me, I'm a +++",
			"Have you met a +++ before?"
		]
	}
}

// load user
// get properties
// get designs
// display

var get_criteria = function(ls) {
	return ls.map(function(x) {
		return {'fields': [x.info]}
	})
}

exports.getdesigns = function(req, res, next) {
	var fields = req.query.fields ? req.query.fields.split(',') : req.properties.map(function (x) {return x.info})
	var criteria = fields.map(function(x){ return {'fields': [x]}})
	Design.find({$or: criteria }, {_id: 0}, function (err, designs) {
		if (err) return res.send('oops')
		req.designs = designs
		next()
	})
}