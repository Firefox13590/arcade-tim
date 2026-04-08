import './Jeu.css'


export default function Jeu(){


	return (
		<article className="Jeu">
		<a className="zone-image" href="./detail-pulse-drift.html">
		  <img
			src="https://images.unsplash.com/photo-1533237264985-ee62f6d342bb?auto=format&fit=crop&w=1200&q=80"
			alt="Pulse Drift"
		  />
		</a>
		<div className="zone-contenu">
		  <p className="type">Course rhythmique</p>
		  <h2><a href="./detail-pulse-drift.html">Pulse Drift</a></h2>
		  <p className="personnes">Alex Cote · Maya Roy</p>
		  <div className="mots-cles">
			<span className="mot-cle">course</span>
			<span className="mot-cle">rythme</span>
			<span className="mot-cle">multijoueur</span>
		  </div>
		  <div className="zone-actions">
			<button type="button" className="btn-like" aria-label="Aimer ce jeu">♥</button>
			<span>3 likes</span>
		  </div>
		</div>
	  </article>
)
}