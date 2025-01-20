import {useEffect, useState} from "react";
import io from "socket.io-client";
import "./App.css";
import Input from "./components/Input";

function App() {
	const socket = io("http://localhost:3000");

	function connectionSocket() {
		socket.on("connection", (socket) => {
			console.log(socket);
		});
	}

	useEffect(() => {}, []);
	return ( 
		<>
			<h1>React Multiplayer Dashboard</h1>

			<Input placeholder="Enter your name" />
		</>
	);
}

export default App;
