import {useEffect, useState} from "react";

import "./App.css";

function App() {
	const socket = io("localhost:3000");

	function connectSocket() {
		socket.on("connection", (socket) => {
			console.log("socket");
		});
	}
	return (
		<>
			<h1>React Multiplayer Dashboard</h1>
		</>
	);
}

export default App;
