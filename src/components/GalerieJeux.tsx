import './GalerieJeux.css'
import Jeu from './Jeu'


export default function GalerieJeux(props: {galerie: IJeu[]}) {
	// console.log(props);


	return (
		<section className='GalerieJeux'>
			{props.galerie.map(((jeu) => <Jeu key={jeu.id} {...jeu} />))}
		</section>
	)
}