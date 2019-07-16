const crypto = require('crypto');


const auth = (req, res , next)=> {
	//middleware
	if(req.get('Authentication') === 'pizdetz') next();
	else res.status(401).json({ message: 'unauthenticated'});
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
};