import {useEffect, useState} from "react";
import io from "socket.io-client";
import "./App.css";
import Input from "./components/input";

function App() {
	const socket = io("localhost:3000");

	function connectSocket() {
		socket.on("connection", (socket) => {
			console.log(socket);
		});
	}

	useEffect(() => {
		connectSocket();
	});
	return (
		<>
			<h1>React Multiplayer Dashboard</h1>
			<Input placeholder="Enter your name" />
		</>
	);
}

export default App;
