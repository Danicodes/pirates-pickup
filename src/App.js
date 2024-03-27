import React from "react";
import { useState } from "react";
import Header from "./components/Header";
import Pirate from "./components/Pirate";

import piratesFile from "./data/sample-pirates-array";

const pirateCalls = [
	"Aaarg, belay that!",
	"Avast me hearties!",
	"Shiver me timbers!",
	"Arrrrrrg nani  ",
];

function randomize() {
	return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
	const [pirates, _setPirates] = useState(piratesFile);
	return (
		<>
			<Header title={randomize()} />
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
