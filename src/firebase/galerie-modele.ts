import { COLLECTION_JEUX, db } from "./init";
import { collection, getDocs, query, where } from "firebase/firestore";


export async function lire(annee: number) {
    const requete = query(collection(db, COLLECTION_JEUX), where('annee', '==', annee));
    const jeux = await getDocs(requete);
    return jeux.docs.map((doc) => ({ id: doc.id, ...doc.data() })) as IJeu[];
}
export async function creer() {

}
export async function maj() {

}
export async function suprimmer() {

}