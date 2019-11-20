const oldCivic = {
  name: 'civiuc',
  year: 2000,
  broken: true
};

const printVehicle = (vehicle: { name: string, year: number, broken: boolean }): void => {
  console.log(vehicle.name)
  console.log(vehicle.year)
  console.log(vehicle.broken)

}

printVehicle(oldCivic);

interface Vehicle {
  name: string,
  year: number,
  broken: boolean
  summary(): string;
}

const newCivic = {
  name: 'Civic',
  year: 2019,
  broken: false,
  summary() {
    return this.year + this.year
  }
};

const printWithInterface = (vehicle: Vehicle): void => {
  console.log(vehicle.name)
  console.log(vehicle.year)
  console.log(vehicle.broken)
  console.log(vehicle.summary())
}

printWithInterface(newCivic)
