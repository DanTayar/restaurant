
const jwt = require('jsonwebtoken');

const auth = (req, res, next)=>{
  const authHeader = req.get('Authorization') || '';

  const token = authHeader.split(' ')[1];

  jwt.verify(token, 'jwt secret code', (err, decoded)=>{
    if( err ) return res.status(401).json({ message: 'auth failed' });
    else {
      req.session = decoded;
      next();
    }
  });
};


module.exports = (app, { menuItem , Comment}) => {
	app.post('/menuitem', auth ,  (req, res, next) => {
		// routehandler
		menuItem.create(req.body)
									//created 
			.then(response => res.status(201).json({ createId: response.dataValues.id}))
			.catch(err => res.status(500).json({ message: 'failed to create menuitem'}));

	});


	app.get('/menuitem' , (req, res) => {
		menuItem.findAll()
			.then(response=> res.json(response.map(r => r.dataValues)))
			.catch(err => res.status(500).json({ message: 'failed to read menuitems' }))
	});

	app.post('/comment', (req, res) => {
		Comment.create(req.body)
		.then(response => res.status(201).json({ createId: response.dataValues.id}))
		.catch(err => res.status(500).json({ message: 'failed to create comment'}));

	});

	app.get('/comment' , auth ,(req, res) => {
		Comment.findAll()
		.then(response => res.status(201).json({ createId: response.dataValues.id}))
		.catch(err => res.status(500).json({ message: 'failed to read comment'}));

	});

	app.post('/login', (req, res)=> {
		if(( req.body.username === 'admin') && 
			(req.body.password === 'guest') ){

			jwt.sign({}, 'jwt secret code', (err, token) => {
				res.json({ token });
			});
		}else {
			res.status(401).json({ message: 'login failed ' })

		}

	});
};