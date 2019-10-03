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
