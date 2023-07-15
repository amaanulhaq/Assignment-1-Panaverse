function create_car(manufacturer: string, model: string, ...options: string[]): any {
    if (options.length % 2 !== 0) {
      throw new Error("Invalid number of options. Each option should consist of a key and a value.");
    }
  
    let car: any = {
      manufacturer,
      model
    };
  
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i + 1];
      car[key] = value;
    }
  
    return car;
  }
  
  let myCar = create_car('Toyota', 'Camry', 'color', 'silver', 'year', '2022');
  console.log(myCar);
  