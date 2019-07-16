const express = require('express');
// make an app 
const app = express();
const port = process.env.PORT || 4000;

const crypto = require('crypto');


//Object relational model
const ORM = require('sequelize');

//connection to database
const connectionString = process.env.DATABASE_URL || 'postgres://meatwar:guest@localhost:5432/meatwar';
const connection = new ORM(connectionString, { logging: false });

const { menuItem: menuItem , Comment } = require('./model')(connection, ORM);

app.use( express.json() );


connection.authenticate()
  .then(()=> console.log('success'))
  .catch((err)=> console.log(err));


require('./api')(app, { menuItem , Comment});


app.get('/hydrate', (req, res, next) => {
	//middleware
	if(req.get('Authentication') === 'pizdetz') next();
	else res.status(401).json({ message: 'unauthenticated'});
}, (req, res) => {
	// routehandler
	menuItem.sync({ force: true})
		.then(() => menuItem.bulkCreate( require('./mockdata').menuitems))
		// delete the table that we have and change the model (create  a table)
		.then(() => Comment.sync({ force: true }))
		.then(()=> res.json({ message: 'database table menuItem creaation succeeded'}))
		.catch (err=> res.status(500).json({ message: 'database table creation failed'}))


});



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
