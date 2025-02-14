import React from 'react';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav>
			<div>
				<a href='#salon'>
					<img src='src/assets/Callus - Logo (no BG scaled).svg' />
					<h1>Callus</h1>
				</a>
			</div>
			<ul>
				<li id='ico1'>
					<a href='#product'>Product</a>
				</li>
				<div className="line"></div>
				<li id='ico2'>
					<a href='#contact'>Call-Us</a>
				</li>
				<div className="line"></div>
				<li id='ico3'>
					<a href='#'>Download</a>
				</li>
			</ul>
		</nav>
	);
};

export default Navbar;
