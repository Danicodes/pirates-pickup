import React from "react";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Pirate from "./components/Pirate";
import AddPirate from "./components/AddPirate";

import piratesFile from "./data/sample-pirates-array";

const pirateCalls = [
	"Aaarg, belay that!",
	"Avast me hearties!",
	"Shiver me timbers!",
	"Arrrrrrg nani  ",
];

//const addPirate = (pirate) => console.log("from the App component: ", pirate);

function randomize() {
	return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
	const [pirates, setPirates] = useState(piratesFile);
	const [serverUrl, setServerUrl] = useState('http://localhost:3005/pirates');
	
	useEffect(() => {
		// Set up code
		// Create async function to run fetch
		const fetchData = async () => {
			try {
				let response = await fetch(serverUrl);
				let fetchedPirates = await response.json();
				setPirates(fetchedPirates);
			} catch(e) {
				console.log(`Error: ${e}`);
				setPirates([]);
			}
		}
		fetchData();
		
		// Tear down code
		return () => setPirates([]);

	}, [serverUrl, setPirates])

	const addPirate = (pirate) => {
		//const newPirates = [pirate, ...pirates];
		//newPirates.unshift(pirate);
		setPirates((prev) => [pirate, ...prev]);
	};

	return (
		<>
			<Header title={randomize()} />
			<AddPirate addPirate={addPirate} />
			{pirates.map((pirate, index) => (
				<Pirate
					key={`${pirate.name.toLowerCase().replace(" ", "-")}-${index}`}
					pirate={pirate}
					name={pirate.name}
					tagline={randomize()}
				/>
			))}
		</>
	);
}

export default App;
