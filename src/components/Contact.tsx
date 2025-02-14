import './Contact.css';
import { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

import React from 'react';

const Contact = () => {
	const [content, setContent] = useState('');
	const [visible, setVisible] = useState(false);
	const [text, setText] = useState('Message sent!');

	const handleButtonClick = () => {
		if (content) {
			setContent('');
			setText('Message sent!');
			if (content.length < 5) {
				setText('Hoot hoot! Seriously? 🦉');
			}
			setVisible(true);
			setTimeout(() => setVisible(false), 3000);
		}
	};

	const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
		setContent(event.target.value);
	};

	return (
		<footer id='contact'>
			<h1>Call-Us</h1>
			<div id='comment-section'>
				<h2>Drop us a comment!</h2>
				<div className='comment-container'>
					<textarea
						name='comment'
						id='comment'
						placeholder='Comment here:'
						value={content}
						onChange={handleInputChange}
					></textarea>
					<button onClick={handleButtonClick}>Send</button>
					<p style={{ display: visible ? 'block' : 'none' }}>{text}</p>
				</div>
			</div>

			<div id='communication'>
				<h2>Our socials</h2>
				<div id='icons'>
					<a href='https://www.discord.com'>
						<div className='discord'></div>
					</a>
					<a href='https://www.youtube.com'>
						<div className='youtube'></div>
					</a>
				</div>
			</div>

			<div id="others">
				<div className="about">
					<h3>About us</h3>
					<p>Our team are creating at first a beta version to let you experiment tons of things with our app for free! So don't hesitate <span>giving us some feedbacks</span> to let us improve your user experience.</p>
				</div>

				<div id="grid-nums">
					<h6>06 95 89 78 49</h6>
					<h6>dow.devotion@gmail.com</h6>
					<h6><span>Made by Callus' team.</span></h6>
				</div>
			</div>
		</footer>
	);
};

export default Contact;
