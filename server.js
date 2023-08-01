const express = require('express')
const app = express()

const PORT = 3000;

let bottlesCount = 99; // Starting number of bottles (change it to any desired number)

app.get('/', (req, res) => {
  res.send(`<a href="/${bottlesCount}">${bottlesCount} Bottles of beer on the wall</a>`);
});

app.get('/:number_of_bottles', (req, res) => {
  const numberOfBottles = parseInt(req.params.number_of_bottles);
  if (numberOfBottles === 0) {
    res.send(`No more bottles of beer on the wall.`);
  } else {
    const nextBottlesCount = numberOfBottles - 1;
    let link = nextBottlesCount === 0 ? '' : `<a href="/${nextBottlesCount}">Take one down, pass it around</a>`;
    res.send(`
      <p>${numberOfBottles} Bottles of beer on the wall.</p>
      ${link}
      <br>
      <a href="/">Start over</a>
    `);
  }
});





app.listen(PORT, ()=>{
    console.log("Hello from the server side");
})