var path = require('path')
  , rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	root: rootPath,
	port: process.env.PORT || 3000,
	db: process.env.MONGOHQ_URL,
	//templateEngine: 'jade',

	// The secret should be set to a non-guessable string that
	// is used to compute a session hash
	sessionSecret: 'i9Tmzh6i',
	// The name of the MongoDB collection to store sessions in
	sessionCollection: 'sessions'
};
