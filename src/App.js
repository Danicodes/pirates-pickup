import React from "react";
import { useState } from "react";
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
