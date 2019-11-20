let apples: number = 5;
let speed: string = "fast and furious";
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ["red", "green", "blue"];
let answers: boolean[] = [true, true, false];
let myNumbers: number[] = [11, 12, 29];

// Class
class Car {}
let car: Car = new Car(); //variable car refers to an instance of a Car

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const lgNumber: (nmber: number) => void = (nmber: number) => {
  console.log(nmber);
};

// When to use annotations
// 1 - Function that returns 'any' type
const json = '{"x":10, "y": 20}';
const coordinates: {x:number, y:number} = JSON.parse(json);
console.log(coordinates)

//2 - When we declare a variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for(let i = 0; i < words.length; i++){
  if(words[i] === 'green'){
    foundWord = true;
  }
}

//3 - quando queremos usar type que não pode ser inferido

// anotations in functions

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string}): void =>{
  console.log(forecast.date);
  console.log(forecast.weather);
}

interface Casa{
  date: Date,
  weather: string
}

const lgInterface = ({date, weather}: Casa) => {
  console.log(date)
  console.log(weather)
};

const lgDestruct = ({date, weather}: {date: Date, weather: string}) => {
  console.log(date)
  console.log(weather)
};


logWeather(forecast);
