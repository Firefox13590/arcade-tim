import './Appli.css'
import BarreControle from './BarreControle'
import Entete from './Entete'
import GalerieJeux from './GalerieJeux'
import Pied2Page from './Pied2Page'

export default function Appli() {

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