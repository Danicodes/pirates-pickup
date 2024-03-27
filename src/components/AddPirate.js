import "../assets/css/AddPirateForm.css";
import { useState } from "react";

const AddPirate = ({ addPirate }) => {
	const [name, setName] = useState("");
	const [vessel, setVessel] = useState("");
	const [weapon, setWeapon] = useState("");

	function createPirate(event) {
		event.preventDefault();
		console.log("Making a pirate");
		const pirate = {
			name,
			vessel,
			weapon,
		};
		addPirate(pirate);

		setName("");
		setVessel("");
		setWeapon("");
	}
	return (
		<form onSubmit={(event) => createPirate(event)}>
			<label htmlFor="pirate-name-input">Name</label>
			<input
				id="pirate-name-input"
				type="text"
				placeholder="Pirate name"
				value={name}
				onChange={(event) => {
					setName(event.target.value);
				}}
			/>
			<label htmlFor="pirate-vessel-input">Vessel</label>
			<input
				id="pirate-vessel-input"
				type="text"
				placeholder="Pirate vessel"
				value={vessel}
				onChange={(event) => {
					setVessel(event.target.value);
				}}
			/>
			<label htmlFor="pirate-weapon-input">Weapon</label>
			<input
				id="pirate-weapon-input"
				type="text"
				placeholder="Pirate weapon"
				value={weapon}
				onChange={(event) => {
					setWeapon(event.target.value);
				}}
			/>
			<button type="submit">Add Pirate</button>
		</form>
	);
};

export default AddPirate;
