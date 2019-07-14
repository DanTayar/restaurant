import React from 'react';
import './Home.css';
import LazyHero from 'react-lazy-hero';

const Home = ()=> (
	<div className='Home Page'>
	 <LazyHero imageSrc='https://images6.alphacoders.com/600/thumb-350-600758.jpg'
	 			opacity={0.3}
	 			parallaxOffset={200}>


	   <h1>Come eat the best meat in town  </h1>
	   </LazyHero>
	</div>
	);

export default Home;