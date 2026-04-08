import './Appli.css'
import BarreControle from './BarreControle'
import Entete from './Entete'
import GalerieJeux from './GalerieJeux'
import Pied2Page from './Pied2Page'
import remplirCollectionJeux from '../scripts/donnees-test'
import { useEffect } from 'react'


export default function Appli() {
    useEffect(() => {
        remplirCollectionJeux();
    }, []);

    return (
        <div className="Appli">
            <Entete />
            <main className="zone-principale">
                <BarreControle />
                <GalerieJeux />
            </main>
            <Pied2Page />
        </div>
    )
}