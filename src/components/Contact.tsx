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
			if (content.length < 5) setText('Hoot hoot! Seriously? 🦉');
			setVisible(true);
			setTimeout(() => setVisible(false), 3000);
		}
	};

	const handleInputChange = (
		event: React.ChangeEvent<HTMLTextAreaElement>
	) => {
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
					<p style={{ display: visible ? 'block' : 'none' }}>
						{text}
					</p>
				</div>
			</div>
			<div id='communication'>
				<h2>Our socials</h2>
                <div id="icons">
                    <div className="discord"></div>
                </div>
			</div>
		</footer>
	);
};

export default Contact;
