function tiposMonstrosFortes(arma, raridade) {
    const armasFortesPorRaridade = {
      'espada': {
        'único': ['fera', 'demônio', 'servo', 'troll', 'trasgo'],
        'raro': ['fera', 'servo', 'troll', 'demônio'],
        'épico': ['trasgo', 'golem', 'milícia'],
        'lendário': ['zumbi', 'bandido']
      },
      'machado': {
        'único': ['bandido', 'zumbi'],
        'raro': ['bandido', 'zumbi'],
        'épico': ['fera', 'servo', 'troll', 'demônio'],
        'lendário': ['milícia', 'trasgo']
      },
      'martelo': {
        'único': ['golem', 'milicia'],
        'raro': ['golem', 'milicia'],
        'épico': ['bandido', 'zumbi'],
        'lendário': ['fera', 'servo', 'golem', 'troll']
      }
    };
  
    if (arma in armasFortesPorRaridade && raridade in armasFortesPorRaridade[arma]) {
      return armasFortesPorRaridade[arma][raridade];
    } else {
      return "Combinação de arma e raridade não encontrada.";
    }
  }
  
  function buscarMonstrosFortes() {
    const armaDesejada = document.getElementById("selectArma").value;
    const raridadeDesejada = document.getElementById("selectRaridade").value;
  
    const monstrosFortes = tiposMonstrosFortes(armaDesejada, raridadeDesejada);
    const resultadoDiv = document.getElementById("resultado");
  
    if (monstrosFortes !== "Combinação de arma e raridade não encontrada.") {
      resultadoDiv.innerHTML = `<p> forje as armas forte contra: ${monstrosFortes.join(', ')} para obter a ${armaDesejada} da raridade ${raridadeDesejada}</p>`;
    } else {
      resultadoDiv.innerHTML = "<p>Combinação de arma e raridade não encontrada.</p>";
    }
  }