function make_great1(magicians:string[]) {
    let greatMagicians = [];
  
    for (let magician of magicians) {
      greatMagicians.push(magician + " the Great");
    }
  
    return greatMagicians;
  }
  
  function show_magicians1(magicians:string[]) {
    for (let magician of magicians) {
      console.log(magician);
    }
  }
  
  let magician1 = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
  
  let originalMagicians = magician1.slice();
  let greatMagicians = make_great1(magician1.slice());
  
  console.log("Original Magicians:");
  show_magicians1(originalMagicians);
  
  console.log("\nGreat Magicians:");
  show_magicians1(greatMagicians);
  