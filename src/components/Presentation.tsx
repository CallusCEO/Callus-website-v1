import React from 'react';
import './Presentation.css';

const Presentation = () => {
	return (
		<div className='presentation' >
			<div id='download-app-icon'>
				<a href='#download'>
					<div id='contain-app'>
						<div className='image'></div>
					</div>
				</a>
				<h1>Version 0.0.1</h1>
			</div>
			<div id='grid' >
				<div className='general' id='product'>
					<div className='card'>
						<h2>Wisdom & Intelligence</h2>
						<p>
							Callus is a simple and sober application that will
							be disponible on mobile at first and then on
							desktops. This app provides the user with multiple
							features that enhance the productivity of its user
							making it the
							<span> students & entrepreneur's </span>best friend.
						</p>
						<div className='contain-img'>
							<div id='img1'></div>
						</div>
					</div>
				</div>

                <div className='goals'>
					<div className='card'>
						<h2>A place of resolutions.</h2>
						<p>
							Scale your habits <span>brick by brick!</span>
							<br /> <br />- Express your goals
							<br /> <br />- Track your habits.
						</p>

						<div className='image-container'></div>

						<div className='contain-img'>
							<div id='img5'></div>
						</div>

						<div className='contain-image-container'>
							<div className='goals-text'></div>
						</div>
					</div>
				</div>

                <div className='timetable'>
					<div className='card'>
						<h2>Our job: Simplify your life!</h2>
						<p>
							Useful timetable for your personnal or professional
							life!
							<br /> <br />- <span>Drag & Drop.</span>
							<br /> <br />- Never forget a task again with
							notifications!
						</p>

						<div className='image-container'></div>

						<div className='contain-img'>
							<div id='img3'></div>
						</div>
					</div>
				</div>

				<div className='to-do'>
					<div className='card'>
						<h2>Don't forget your homeworks!</h2>
						<p>
							Ease to use & casual to-do list.
							<br /> <br />- Write in a flash
							<br /> <br />- Write down so you{' '}
							<span>don't forget!</span>
						</p>

						<div className='image-container'></div>
						<div className='image-container-2'></div>

						<div className='contain-img'>
							<div id='img6'></div>
						</div>
					</div>
				</div>

				<div className='timer'>
					<div className='card'>
						<h2>Ready?... Go!</h2>
						<p>
							Keep up with our timer! The perfect tool for{' '}
							<span>concentration.</span>
							<br /> <br />- Focus to <span>deepwork!</span>
							<br /> <br />- Tic-tac tic-tac!
						</p>

						<div className='contain-img'>
							<div id='img7'></div>
						</div>
					</div>
				</div>

                <div className='notes'>
					<div className='card'>
						<h2>A note-tacking app!</h2>
						<p>
							An adaptative note-tacking app. <br /> <br />
							- Quick notes to take lessons or catch ideas! <br />{' '}
							<br />- Supports also <span>.md</span> typing!
						</p>

						<div className='image-container'></div>

						<div className='contain-img'>
							<div id='img2'></div>
						</div>
					</div>
				</div>

				<div className='quote'>
					<div className='card'>
						<h2>Lack of motivation? Here we are!</h2>
						<p>
							Callus enables you to have access to one
							<span> motivational quote</span> each time you enter
							the app.
							<br /> <br />- Stay in shape!
							<br /> <br />- Scala-ble mindset.
						</p>

						<div className='contain-img'>
							<div id='img8'></div>
						</div>

						<div className='contain-img_2'>
							<div id='img8_1'></div>
						</div>
					</div>
				</div>
                
                <div className='calendar'>
					<div className='card'>
						<h2>When was your appointment again?</h2>
						<p>
							Sober style, minimalistic:{' '}
							<span>gain of time.</span>
							<br /> <br />-{' '}
							<span>Drag & Drop (still simple)!</span>
							<br /> <br />- 1 touch, and you're done!
						</p>

						<div className='contain-image-container'>
							<div className='image-container'></div>
						</div>

						<div className='contain-img'>
							<div id='img4'></div>
						</div>
					</div>
				</div>

				<div className='ai'>
					<div className='card'>
						<h2>Lucas the Owl - AI assistant</h2>
						<p>
							One day there will be an{' '}
							<span>wise owl here to help you...</span>
							<br /> <br />- Give a break to your brain!
							<br /> <br />- <span>🦉 Hoot hoot!</span>
						</p>

						<div className='image-container'></div>

						<div className='contain-img'>
							<div id='img9'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Presentation;
