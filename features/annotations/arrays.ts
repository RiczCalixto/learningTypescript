const carMakers: string[] = ['ford', 'toyota', 'chevy'];
const dates = [new Date(), new Date()];

const carByMakers: string[][] = [
  ['carro'],
  ['carrinho'],
  ['carrao']
]

const car = carMakers[0] // Inference de que car é string
const myCar = carMakers.pop()
console.log(myCar)

carMakers.map((car: string): string => {
  console.log(car)
  return car.toUpperCase();
})

// Multiple types inside arrays

const importantDates: (Date | string | { chave: string })[] = [
  new Date(),
  '2019-11-11',
  { chave: 'valor' }
]

// Collection of records with some arbitrary sort order - quando usar array

