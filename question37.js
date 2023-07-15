"use strict";
function make_shirts(size = 'Large', message = 'I love TypeScript') {
    console.log(`The shirt size is ${size} and it will be printed with the message: "${message}".`);
}
make_shirts(); // Large shirt with default message
make_shirts('Medium'); // Medium shirt with default message
make_shirts('Small', 'Hello, JavaScript!'); // Custom size and message
