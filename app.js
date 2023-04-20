const note = [12,4,7,18,1,14];

function findSmallest (note){
    //return le nombre le plus petit
    let smallest=note[0];
    // parcours le tableau
    for (let i=1; i< note.length; i++) {
        // enregistre la valeur la plus petite dans smallest
        if (note[i]<smallest) {
            smallest=note[i];
        }
    }
    return smallest;
}

function sorteNote (note) {
    let sortedNote = [], min, index_min, tab_length;
    // Prend la longueur de note car note.length est remis à jour dans le for
    tab_length = note.length;
    // Parcours à chaque fois le tableau, prends le min et le supprime de note
    for (let i=0; i < tab_length; i++) {
        min = findSmallest(note);           // Cherche
        sortedNote.push(min);               // Ajoute au tableau trié
        index_min = note.indexOf(min);      // Donne l'index du nombre à supprimer
        note.splice(index_min,1);           // Supprime le nombre à l'index donné
    }
    return sortedNote;                      // Renvoie le tableau trié
}

//console.log(findSmallest(note));
console.log(sorteNote(note));
