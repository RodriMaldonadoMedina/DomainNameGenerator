const pronoun = ['the','our'];
const adj = ['great', 'big' ];
const noun = ['jogger','racom'];
const ext = ['.com', '.net', '.us', '.io', '.ger']

function generarDominio(){
    let dominio ="";
    let newDominio = "";
    let dominioPronoun = "";
    for(i=0;i<pronoun.length;i++){
        let dominioAdj = "";
        dominioPronoun = pronoun[i];
        for(j=0;j<adj.length;j++){
            let dominioNoun = "";
            dominioAdj = adj[j];
            for(z=0;z<noun.length;z++){
                let dominioExt = "";
                dominioNoun = noun[z];
                for(x=0;x<ext.length;x++){
                    dominioExt = ext[x];
                    dominio = dominioPronoun+dominioAdj+dominioNoun;
                    newDominio = buscarCadena(dominio,ext[x].slice(1,ext[x].length))+dominioExt;
                    console.log(newDominio);
                }
            }
        }
    }
}

function buscarCadena(palabra1, palabra2){
    if (palabra1.endsWith(palabra2)){
        let posicion = palabra1.lastIndexOf(palabra2);
        let palabraNueva = palabra1.slice(0,posicion);
        return palabraNueva;
    }
    return palabra1;
}
generarDominio();