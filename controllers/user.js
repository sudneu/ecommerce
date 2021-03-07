const User = require('./controllers/user');
 
export.signup = (req, res) => {
	const user = new User(req.body);

	user.save((err, user) => {
		if(err){
			return res.status(404).json({
						err
					})
		}
		return res.json({
			success : true,
			message : 'successfully signed up',
			user
		})
	})
};