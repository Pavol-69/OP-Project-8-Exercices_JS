function pairNumbers(first, last) {
  let result = "";
  for (let i = first; i <= last; i++) {
    if (i % 2 == 0) {
      result = `${result}${result != "" ? "," : ""}${i}`;
    }
  }
  return result;
}

export default pairNumbers;
