/*
Scrivere una applicazione Javascript:
Memorizzare un array di nomi [“Adele”, “Patrizio”, “Lucia”, “Carlo”, “Sara”, “Vincenzo”]

Creare una promise ed al suo interno:
A partire dall’array precedentemente creato produrre un array di studenti, ciascuno rappresentato da un oggetto dizionario. Ogni dizionario deve contenere due chiavi: “nome” (stringa) e “eta” (number, generato casualmente tra 14 e 19 con la funzione Math.random() )

calcolare l’età media degli studenti
se l’età media è uguale o supera il valore di 18 restituire nel “resolve” una stringa con risultato “media >= 18”)

se l’età media è inferiore a 18 restituire nel “reject” una stringa con risultato “media < 18”.
*/

const bottone = document.getElementById('bottone');
const result = document.getElementById('result');

let arrayNomi = ['Adele', 'Patrizio', 'Lucia', 'Carlo', 'Sara', 'Vincenzo'];
//let dictTemplate = { nome: '%NOME', eta: null }; se lo metto qui il template senza creazione di un temporaneo nel for non funziona, o se non lo creo all'interno del for e gli assegno i valori nel for non funziona

let arrayDict;
let somma = 0;
let media = 0;
const render = (messaggio) => {
  media = 0;
  somma = 0;
  result.innerHTML = messaggio;
};

bottone.onclick = () => {
  const promise = new Promise((resolve, reject) => {
    arrayDict = [];
    for (let i = 0; i < arrayNomi.length; i++) {
      let dictTemplate = { nome: '%NOME', eta: null }; // esempio 1
      dictTemplate.nome = arrayNomi[i];
      dictTemplate.eta = (Math.random() % 19) + 14;
      //let nuovoD={nomeX:dictTemplate.nome,etaX:dictTemplate.eta}; //esempio 2
      //arrayDict.push(nuovoD);
      arrayDict.push(dictTemplate);
      somma += dictTemplate.eta;
    }
    console.log(arrayDict);
    media = somma / arrayNomi.length;
    if (media >= 18) {
      resolve('la media è +18');
    } else {
      reject('la media è under 18');
    }
  })
    .then((messaggio) => {
      render(messaggio);
    })
    .catch((messaggio) => {
      render(messaggio);
    });
};
