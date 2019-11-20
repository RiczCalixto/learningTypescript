// São arrays que, cada elemento, representa uma propriedade de um objeto

const drinkObject = {
  color: 'brown',
  carbonated: true,
  sugar: 40
}

const tupleOfDrinkObject = ['brown', true, 40]

// O problema é que se perde informação. A ordem dos elementos pode ser alterada e isso não é bom

const pepsi: [string, boolean, number] = ['nron', false, 20]

// Essa anotação específica de cada elemento dentro do array o transforma em Tuple

type Drink = [string, boolean, number]; // Criação de Type alias.

const coca: Drink = ['casa', false, 11];

// Tuples não sao muito uteis. Um dos raros exemplos de uso é para arquivos CSV, onde o dev quer identificar o que esta em cada linha
// É preferivel optar por objects ao inves de Tuples.
