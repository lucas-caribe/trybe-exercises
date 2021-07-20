function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const fetchPromise = async () => {
  const promise = new Promise((resolve, reject) => {
    let randomNumbers = new Array(10).fill(0);

    randomNumbers.forEach((_, index) => {
      const randomNumber = getRandomNumber(1, 50);
      randomNumbers[index] = randomNumber * randomNumber;
    });

    const sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);

    sum < 8000 ? resolve(sum) : reject();
  });

  // promise
  //   .then((sum) => [2, 3, 5, 10].map((number) => sum / number))
  //   .then((array) => array.reduce((acc, curr) => acc + curr, 0))
  //   .catch(() =>
  //     console.log('É mais de oito mil! Essa promise deve estar quebrada!'),
  //   );

  try {
    const sum = await promise;

    console.log(sum);
  } catch(error) {
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
};

fetchPromise();
