class Vehiicle {
  //color: string = 'red';
  //color: string;
  //ao anotar como public, perde-se a necessidade de instanciar fora do construct e dar this dentro
  constructor(public color: string) {

  }

  public drive(): void {
    console.log('rumrum')
  }
  protected honk(): void {
    console.log('çasa')
  }
  private private(): void {
    console.log('casw')
  }
}

class Car extends Vehiicle {
  constructor(public wheels: number, color: string) {
    super(color)

  }

  startDrivingProcess(): void {
    this.honk();
  }
}

const caar = new Car(2, 'black');
caar.drive()
caar.startDrivingProcess()
console.log(caar.color)

// Modifiers 
// Public this method can be called anywhere, anytime
// Private - This method can only be called by other methods in this class
// Protected - This method can be called by other methods in this class, or by
// other methods in child classes
