import Button from "./Button";
import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

console.log(`Avatar: ${avatar}`);
function Pirate({ pirate, tagline, removePirate }) {
	const { name, year, weapon, vessel, desc, id } = pirate;
	return (
		<section>
			<summary>
				<img src={avatar} alt="pirate" />
				<h3>{name}</h3>
				<ul>
					<li>Died: {year}</li>
					<li>Weapon: {weapon}</li>
					<li>Vessel: {vessel}</li>
				</ul>
			</summary>
			<article>
				<h2>{tagline}</h2>
				<p>{desc}</p>
				<Button onClick={(e) => removePirate(id)} text="Remove Pirate"></Button>
			</article>
		</section>
	);
}

export default Pirate;
