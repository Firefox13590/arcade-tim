import { COLLECTION_JEUX, db } from "../firebase/init";
import jeux from '../data/jeux.json'
import { addDoc, collection, getDocs } from "firebase/firestore";


export default async function remplirCollectionJeux() {
    const collJeux = collection(db, COLLECTION_JEUX);
    if ((await getDocs(collJeux)).docs.length > 0) return;
    else for (const jeu of jeux) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { id, ...jeuSansId } = jeu;
        // console.log(collJeux);
        // console.log((await getDocs(collJeux)).docs);
        await addDoc(collJeux, jeuSansId);
    }
}