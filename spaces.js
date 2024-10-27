function getSpaces(spaces, yes, today) {
  let count = 0;
  for (let i = 0; i < spaces; i++) {
    if (yes[i] === "C" && today[i] === "C") {
      count++;
    }
  }
  return count;
}
console.log(getSpaces(5, "CC..C", ".CC.."));
