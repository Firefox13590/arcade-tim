import './Entete.css'


export default function Entete() {


	return (
		<header className="Entete">
			<div className="bloc-marque">
				<p className="tag">4J4 · Projet jeu en equipe</p>
				<h1>Arcade des jeux TIM</h1>
			</div>
			<div className="zone-utilisateur">
				<img
					className="avatar"
					src="https://i.pravatar.cc/80?img=32"
					alt="Avatar utilisateur"
				/>
				<span className="nom-utilisateur">Maya Roy</span>
				<button type="button" className="btn-secondaire">Deconnexion</button>
			</div>
		</header>
	)
}