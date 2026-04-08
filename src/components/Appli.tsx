import * as modeleGalerie from '../firebase/galerie-modele'
import './Appli.css'
import BarreControle from './BarreControle'
import Entete from './Entete'
import GalerieJeux from './GalerieJeux'
import Pied2Page from './Pied2Page'
// Seulement pour remplir les données de test
// import remplirCollectionJeux from '../scripts/donnees-test'
import { useEffect, useState } from 'react'


export default function Appli() {
    const [annee, setAnnee] = useState(new Date().getFullYear());
    const [galerie, setGalerie] = useState<IJeu[]>([]);

    // Seulement pour remplir les données de test
    // useEffect(() => {
    //     remplirCollectionJeux();
    // }, []);

    useEffect(() => {
        async function lireJeux() {
            setGalerie(await modeleGalerie.lire(annee));
        }

        lireJeux();
    }, [annee]);


    return (
        <div className="Appli">
            <Entete />
            <main className="zone-principale">
                <BarreControle annee={annee} setAnnee={setAnnee} galerie={galerie} />
                <GalerieJeux galerie={galerie} />
            </main>
            <Pied2Page />
        </div>
    )
}