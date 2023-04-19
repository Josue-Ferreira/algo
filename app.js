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

console.log(findSmallest(note));