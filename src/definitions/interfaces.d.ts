


interface IJeu {
    id: string;
    annee: number;
    nom: string;
    type: string;
    personnes: string[];
    synopsis: string;
    motsCles: string[];
    imageUrl: {
        vignette: string;
        details: [];
    };
    plebiscites: {
        uid: string;
        unom: string;
    }[];
}