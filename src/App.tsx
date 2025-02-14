import React from 'react';
import Navbar from './components/Navbar';
import Salon from './components/Salon';
import useSmoothScroll from './components/useSmoothScrol';
import Presentation from './components/Presentation';
import Contact from './components/Contact';

const App = () => {
	useSmoothScroll();
	return (
		<>
			<Navbar></Navbar>
			<Salon></Salon>
			<Presentation></Presentation>
			<Contact></Contact>
		</>
	);
};

export default App;
