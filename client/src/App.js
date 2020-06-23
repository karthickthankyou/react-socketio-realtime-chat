import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

const App = () => (
	<BrowserRouter>
		<Route path="/" exact component={() => <div>Join</div>} />
		<Route path="/chat" exact component={() => <div>Chat</div>} />
	</BrowserRouter>
);

export default App;
