import './Jeu.css'


export default function Jeu(props: IJeu) {


	return (
		<article className="Jeu">
			<a className="zone-image" href="./detail-pulse-drift.html">
				<img
					// src="https://images.unsplash.com/photo-1533237264985-ee62f6d342bb?auto=format&fit=crop&w=1200&q=80"
					src={`/images/jeux/${props.imageUrl.vignette}`}
					alt={props.nom}
				/>
			</a>
			<div className="zone-contenu">
				<p className="type">{props.type}</p>
				<h2><a href="./detail-pulse-drift.html">{props.nom}</a></h2>
				<p className="personnes">{props.personnes.join(' - ')}</p>
				<div className="mots-cles">
					{props.motsCles.map(((mc, _) => <span key={_}>{mc}</span>))}
				</div>
				<div className="zone-actions">
					<button type="button" className="btn-like" aria-label="Aimer ce jeu">♥</button>
					<span>{props.plebiscites.length} likes</span>
				</div>
			</div>
		</article>
	)
}