import React from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';

const Navbar = ()=> (
	<div className='Navbar'>
	<h1> Meat War </h1>
	<ul>
		<li>
		<img src='https://image.flaticon.com/icons/svg/815/815966.svg'/>
		</li>
		<li>
			<Link to='/home'>Home</Link>
		</li>
		<li>
			<Link to='/menu'>Menu</Link>
		</li>
		<li>
			<Link to='/contact'>Contact us</Link>
		</li>
	</ul>

	</div>

	);

export default Navbar;