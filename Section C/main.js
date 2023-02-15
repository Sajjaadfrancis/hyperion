function readNumeral(numeral) {
  const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const tens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const thousands = ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion', 'sextillion', 'septillion', 'octillion', 'nonillion'];

  function convertTwoDigit(num) {
    if (num < 10) {
      return ones[num];
    } else if (num < 20) {
      return teens[num - 10];
    } else {
      const ten = Math.floor(num / 10);
      const one = num % 10;
      if (one === 0) {
        return tens[ten - 2];
      } else {
        return `${tens[ten - 2]}-${ones[one]}`;
      }
    }
  }

  function convertThreeDigit(num) {
    const hundred = Math.floor(num / 100);
    const twoDigit = num % 100;
    let result = '';
    if (hundred > 0) {
      result += `${ones[hundred]} hundred`;
      if (twoDigit > 0) {
        result += ' and ';
      }
    }
    if (twoDigit > 0) {
      result += convertTwoDigit(twoDigit);
    }
    return result;
  }

  if (numeral === '0') {
    return 'zero';
  }
  
  const chunks = [];
  while (numeral.length > 0) {
    chunks.push(numeral.slice(-3));
    numeral = numeral.slice(0, -3);
  }
  
  const parts = [];
  for (let i = chunks.length - 1; i >= 0; i--) {
    const chunk = chunks[i];
    if (chunk !== '000') {
      parts.push(`${convertThreeDigit(Number(chunk))} ${thousands[i]}`);
    }
  }

  return parts.join(' ');
}

function showResult() {
  const inputBox = document.getElementById("input-box");
  const outputBox = document.getElementById("output-box");
  const input = inputBox.value;
  const output = readNumeral(input);
  outputBox.innerText = output;
}

module.exports = readNumeral;

