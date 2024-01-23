const router = require("express").Router();
const jwt= require('jsonwebtoken');

router.get('/profile', (req, res) => {
	const token = req.headers.authorization;
  
	if (!token) {
	  return res.status(401).json({ error: 'Unauthorized' });
	}
  
	jwt.verify(token, SECRET_KEY, (err, user) => {
	  if (err) {
		return res.status(403).json({ error: 'Forbidden' });
	  }
  
	  // In a real application, you would fetch user data from the database using the user's email
	  const { name, email } = user;
	  res.json({ name, email });
	});
  });

  module.exports = router;