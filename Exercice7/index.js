function convertToBinary() {
  let num = Number(document.getElementById("decimalInput").value);
  let result = div2(num);
  while (num / 2 >= 1) {
    num = Math.floor(num / 2);
    result = result + div2(num);
  }
  document.getElementById("binaryResult").textContent =
    isNaN(num) || num == "" ? "" : result.split("").reverse().join("");
}

function div2(num) {
  if (Number.isInteger(num / 2)) {
    return "0";
  } else {
    return "1";
  }
}
