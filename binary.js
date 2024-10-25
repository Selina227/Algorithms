function binaryToDec(binary) {
  let decimal = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[binary.length - 1 - i] === "1") {
      decimal = decimal + Math.pow(2, i);
    }
  }
  return decimal;
}
console.log(binaryToDec("1101"));

function decToBinary(dec) {
  for (let i = 0; i < dec.digit; i++) {
    if (dec[dec.digit % 2] === 0) {
      binary.digit = 0;
    }
    if (dec[dec.digit % 2] === 1) {
      binary.digit = 1;
    }
  }
  let binary = binary.digit;
  return binary;
}
console.log(decToBinary("13"));
