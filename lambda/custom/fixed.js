module.exports = {
  getNumber(value) {
    return function () {
      return value;
    };
  }
};