const getRandomInteger = (min, max) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  return Math.floor(Math.random() * (max - min)) + min;
};
getRandomInteger(1,100);

const getRandomIntegerFloating = (min, max, digits) => {
  // min = Math.ceil(min);
  // max = Math.floor(max);
  if (max <= min || min < 0 || max <= 0 ) {
    return ('Функция не может быть выполнена');
  }
  const digitsDegree = 10 ** digits;
  return Math.floor((Math.random() * (max - min)) + min * digitsDegree)/digitsDegree;
};
getRandomIntegerFloating(0,100,3);

