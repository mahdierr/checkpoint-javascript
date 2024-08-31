let randomNumbers = [];
for (let i = 0; i < 100; i++) {
  randomNumbers.push(Math.round(Math.random() * 100));
}

console.log(...randomNumbers);

function getMaxMin(numbers) { // when declaring numbers in the brackets here, what are we doing? Max and min are defined later so does returning min and max as done later push two values to the function?
  let max = numbers[0];
  let min = numbers[0];

  /*for (let i = 0; i < numbers.length - 1; i++) { // why - 1?
      if (numbers[i] > max){
          max = numbers[i]
      }
      
      if (numbers[i]< min) {
          min = numbers[i]
      }
  }*/

  for (let number of numbers) {
    max = number > max ? number : max;
    min = number < min ? number : min;
  }

  return { max, min };
}

console.log(getMaxMin(randomNumbers));