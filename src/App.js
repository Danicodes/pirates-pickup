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

function randomize() {
	return pirateCalls[Math.floor(Math.random() * pirateCalls.length)];
}

function App() {
	const [pirates, setPirates] = useState(piratesFile);
	const [serverUrl, setServerUrl] = useState("http://localhost:3005/pirates");

	useEffect(() => {
		// Set up code
		// Create async function to run fetch
		const fetchData = async () => {
			try {
				let response = await fetch(serverUrl);
				let fetchedPirates = await response.json();
				setPirates(fetchedPirates);
			} catch (e) {
				console.log(`Error: ${e}`);
				setPirates([]);
			}
		};
		fetchData();

		// Tear down code
		return () => setPirates([]);
	}, [serverUrl, setPirates]);

	const addPirate = (pirate) => {
		requestAddPirate(pirate);
		setPirates((prev) => [pirate, ...prev]);
	};

	const requestAddPirate = (pirate) => {
		const postData = (pirate) => {
			fetch(serverUrl, {
				method: "POST",
				mode: "cors",
				credentials: "same-origin",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(pirate),
			});
		};

		let currPirates = pirates;
		currPirates.sort((pirateA, pirateB) => {
			if (parseInt(pirateA.id) > parseInt(pirateB.id)) {
				return -1;
			} else {
				return 1;
			}
		});
		let maxId = currPirates[0].id;
		pirate.id = `${parseInt(maxId) + 1}`.padStart(3, "0");
		postData(pirate);
		console.log(`Added pirate with id ${pirate.id}`);
	};

	const removePirate = (id) => {
		const newPirates = pirates.filter((pirate) => pirate.id !== id);
		setPirates(newPirates);

		//fetch current pirate list with ids
		fetch(serverUrl)
			.then((res) => res.json())
			.then((data) => {
				requestDeletePirate(id);
			});
	};

	const requestDeletePirate = (pirateId) => {
		// delete pirate with found id
		pirateId
			? fetch(`${serverUrl}/${pirateId}`, {
					method: "DELETE",
			  })
					.then(console.log(`Deleted pirate with id: ${pirateId}`))
					.catch((err) => {
						console.log(err.message);
					})
			: console.log(`Cannot find pirate in database with id: ${pirateId}`);
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
					removePirate={removePirate}
				/>
			))}
		</>
	);
}

export default App;
