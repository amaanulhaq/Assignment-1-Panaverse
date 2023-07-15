function makeSandwich(...ingredients:string[]) {
    if (ingredients.length === 0) {
      console.log("Error: No ingredients provided!");
      return;
    }
  
    console.log("Making a sandwich with the following ingredients:");
  
    for (let ingredient of ingredients) {
      console.log("- " + ingredient);
    }
  
    console.log("Sandwich complete!");
  }
  
  makeSandwich("Bread", "Cheese", "Lettuce", "Tomato");
  console.log();
  makeSandwich("Bread", "Ham", "Cheese");
  console.log();
  makeSandwich("Bread", "Turkey");