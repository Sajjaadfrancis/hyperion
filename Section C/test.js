const readNumeral = require('./main.js');

function testReadNumeral(input, expectedOutput) {
  const output = readNumeral(input);
  if (output !== expectedOutput) {
    console.log(`Test failed for input "${input}". Expected "${expectedOutput}", but got "${output}".`);
  } else {
    console.log(`Test passed for input "${input}".`);
  }
}

// Tests
testReadNumeral('0', 'zero');
testReadNumeral('10', 'ten ');
testReadNumeral('100', 'one hundred ');
testReadNumeral('1000', 'one thousand');
testReadNumeral('1500', 'one thousand five hundred');