module.exports = {
  getNumber(min, max) {
    return function () {
      return Math.floor(Math.random() * (max - min + 1) + min);
    };
  },
  number(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
};