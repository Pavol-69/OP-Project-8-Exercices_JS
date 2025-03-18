// Créez votre fonction ici
function calculateAverage(list) {
  let result = -1;

  if (list != undefined) {
    list.forEach((num) => {
      result = result + Number(num);
    });
  }

  return result >= 0
    ? (result + 1) / list.length
    : "No numbers to calculate average";
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])); // retourne 10
console.log(calculateAverage([10, 20, 30, 20])); // retourne 20
console.log(calculateAverage()); // No numbers to calculate average

export default calculateAverage;
