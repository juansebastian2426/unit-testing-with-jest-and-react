const cities = ['Ciudad de Mexico', 'Bogotá', 'Lima', 'Buenos Aires', 'Medellin']

const randomString = () => {
  const string = cities[Math.floor(Math.random()*cities.length)]
  return string;
};

const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error, str not found'))
    }

    resolve(str.split('').reverse().join(""))
  });
};

module.exports = randomString;
