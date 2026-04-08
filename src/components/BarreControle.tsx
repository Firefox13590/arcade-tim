import './BarreControle.css'


export default function BarreControle(props: IEtatAnnee & {galerie: IJeu[]}) {
	const nbJeux = props.galerie.length;
	// console.log(props);

	return (
		<section className="BarreControle">
			<div className="groupe">
				<label htmlFor="annee">Annee</label>
				<select id="annee" name="annee" value={props.annee}
				onChange={(e) => props.setAnnee(Number(e.target.value))}>
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
					<option value={'aleatoire'}>Aleatoire</option>
					<option value={'alpha-asc'}>Alpha ascendant</option>
					<option value={'alpha-desc'}>Alpha descendant</option>
					<option value={'num-asc'}>Likes ascendant</option>
					<option value={'num-desc'}>Likes descendant</option>
				</select>
			</div>

			<p className="resume">{props.galerie.length == 1 ? (<>1 jeu affiché</>) : (<>{nbJeux} jeux affichés</>)}</p>
		</section>
	)
}