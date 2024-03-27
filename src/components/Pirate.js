import "../assets/css/Pirate.css";
import avatar from "../assets/img/avatar.png";

console.log(`Avatar: ${avatar}`);
function Pirate({ pirate, tagline }) {
	const { name, year, weapon, vessel, desc } = pirate;
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
			</article>
		</section>
	);
}

export default Pirate;
