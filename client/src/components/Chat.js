import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';

import { Link } from 'react-router-dom';
import queryString from 'query-string';

let socket;

const Chat = ({ location }) => {
	const { name: name_, room: room_ } = queryString.parse(location.search);
	const [name, setName] = useState(name_);
	const [room, setRoom] = useState(room_);
	const ENDPOINT = 'http://localhost:5000';

	useEffect(() => {
		const socket = io(ENDPOINT);
		socket.emit('join', { name, room }, () => {});

		return () => {
			console.log('Closing the window');

			socket.emit('disconnect');
			socket.off();
		};
	}, []);

	return <div>Chat</div>;
};

export default Chat;
