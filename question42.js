"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the Great";
    }
}
function show_magicians(magicians) {
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicians = ['Harry Houdini', 'David Copperfield', 'Penn Jillette', 'Teller'];
make_great(magicians);
show_magicians(magicians);
