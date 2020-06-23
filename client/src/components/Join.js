import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './styles/Join.css';

const Join = () => {
	const [name, setName] = useState('');
	const [room, setRoom] = useState('');

	const validateEnter = (e) => {
		if (!room || !name) {
			alert('Values cannot be empty.');
			e.preventDefault();
		}
	};

	return (
		<div className="container">
			<div className="loginCard">
				<h1 className="heading">Chat room</h1>
				<div>
					<input
						placeholder="Name"
						className="joinInput"
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className="joinInput mt-20"
						type="text"
						onChange={(e) => setRoom(e.target.value)}
					/>
				</div>
				<Link onClick={validateEnter} to={`/chat?name=${name}&room=${room}`}>
					<button className={'button mt-20'} type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
