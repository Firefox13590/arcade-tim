import './BarreControle.css'


export default function BarreControle() {


	return (
		<section className="BarreControle">
			<div className="groupe">
				<label htmlFor="annee">Annee</label>
				<select id="annee" name="annee">
					<option>2026</option>
					<option>2025</option>
					<option>2024</option>
				</select>
			</div>

			<div className="groupe filtre">
				<label htmlFor="filtre">Filtrer par mots-cles</label>
				<input
					id="filtre"
					name="filtre"
					type="search"
					placeholder="Nom, type, personnes, synopsis..."
				/>
			</div>

			<div className="groupe">
				<label htmlFor="tri">Tri</label>
				<select id="tri" name="tri">
					<option>Aleatoire</option>
					<option>Alpha ascendant</option>
					<option>Alpha descendant</option>
					<option>Likes ascendant</option>
					<option>Likes descendant</option>
				</select>
			</div>

			<p className="resume">4 jeu(x) affiche(s)</p>
		</section>
	)
}