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
  let binary = 0;
  while (dec > 0) {
    dec = Math.floor(dec / 2);
    binary = (dec % 2) + binary;
  }
  return binary;
}
console.log(decToBinary("13"));
