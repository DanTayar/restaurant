const crypto = require('crypto');


module.exports = (app, { menuItem }) => {
	app.post('/menuitem', (req, res, next) => {
		//middleware
	if(req.get('Authentication') === 'pizdetz') next();
	else res.status(401).json({ message: 'unauthenticated'});

	}, (req, res) => {
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
};