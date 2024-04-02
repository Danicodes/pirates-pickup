import "../assets/css/AddPirateForm.css";
import Button from "./Button";
import { useState } from "react";

const AddPirate = ({ addPirate }) => {
	const initialFormState = {
		name: "",
		vessel: "",
		weapon: "",
		year: "",
		desc: "",
	};

	const [pirate, setPirate] = useState(initialFormState);

	function createPirate(event) {
		event.preventDefault();
		addPirate(pirate);
		setPirate(initialFormState);
	}

	const handleInputChange = (target) => {
		let { name, value } = target;
		setPirate({ ...pirate, [name]: value });
	};

	return (
		<form onSubmit={(event) => createPirate(event)}>
			<label htmlFor="pirate-name-input">Name</label>
			<input
				id="pirate-name-input"
				type="text"
				placeholder="Pirate name"
				value={pirate.name}
				name="name"
				onChange={(event) => {
					handleInputChange(event.target);
				}}
			/>
			<label htmlFor="pirate-vessel-input">Vessel</label>
			<input
				id="pirate-vessel-input"
				type="text"
				placeholder="Pirate vessel"
				value={pirate.vessel}
				name="vessel"
				onChange={(event) => {
					handleInputChange(event.target);
				}}
			/>
			<label htmlFor="pirate-weapon-input">Weapon</label>
			<input
				id="pirate-weapon-input"
				type="text"
				placeholder="Pirate weapon"
				name="weapon"
				value={pirate.weapon}
				onChange={(event) => {
					handleInputChange(event.target);
				}}
			/>
			<label htmlFor="died">Died</label>
			<input
				id="died"
				type="text"
				placeholder="Date of death"
				value={pirate.year}
				name="year"
				onChange={(event) => handleInputChange(event.target)}
			/>
			<label htmlFor="desc">Description</label>
			<textarea
				id="desc"
				placeholder="Pirate description"
				value={pirate.desc}
				name="desc"
				onChange={(event) => handleInputChange(event.target)}
			/>
			<Button text="Add a Pirate"></Button>
		</form>
	);
};

export default AddPirate;
