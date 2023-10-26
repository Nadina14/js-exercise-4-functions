/* Crea un array di 10 oggetti che rappresentano una mela, indicando per ognuna varietà, peso e diametro.
Calcola quanto pesano tutte le mele.
BONUS Dividi in due array separati le mele con diametro maggiore di 10cm. 
Infine stampa separatamente quanto pesano i due gruppi di mele. */

const mele = [
    {
      varietà: "golden",
      peso: 80,
      diametro: 15
    },
    {
      varietà: "elstar",
      peso: 90,
      diametro: 8
    },
    {
      varietà: "fuji",
      peso: 100,
      diametro: 12
    },
    {
      varietà: "gala",
      peso: 75,
      diametro: 20
    },
    {
      varietà: "pinova",
      peso: 73,
      diametro: 5
    },
    {
      varietà: "gianni",
      peso: 60,
      diametro: 9
    },
    {
      varietà: "topaz",
      peso: 85,
      diametro: 16
    },
    {
      varietà: "idarden",
      peso: 99,
      diametro: 18
    },
    {
      varietà: "alex",
      peso: 83,
      diametro: 4
    },
    {
      varietà: "nadina",
      peso: 80,
      diametro: 11
    }
  ];
  

  function sommaMele(arrayDiMele) {
    let pesoTotale = 0;
    for (let i = 0; i < arrayDiMele.length; i++) {
      pesoTotale += arrayDiMele[i].peso;
    }
    return pesoTotale;
  }
  
  const pesoTotaleMele = sommaMele(mele);
  console.log("Il peso totale di tutte le mele è: " + pesoTotaleMele + " grammi");
  
  // Dividi in due array separati le mele con diametro maggiore di 10cm
  const melePiccole = [];
  const meleGrandi = [];
  
  for (let i = 0; i < mele.length; i++) {
    if (mele[i].diametro > 10) {
      meleGrandi.push(mele[i]);
    } else {
      melePiccole.push(mele[i]);
    }
  }
  
  // Calcola quanto pesano i due gruppi di mele
  const pesoTotaleMelePiccole = sommaMele(melePiccole);
  const pesoTotaleMeleGrandi = sommaMele(meleGrandi);
  
  console.log("Il peso totale delle mele con diametro piccolo è: " + pesoTotaleMelePiccole + " grammi");
  console.log("Il peso totale delle mele con diametro grande è: " + pesoTotaleMeleGrandi + " grammi");