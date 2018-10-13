const random = require('./random');
const fixed = require('./fixed');

const level1 = {
    addition: {
        number1 : random.getNumber(1,9),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 5
    },
    subtraction: {
        number1 : random.getNumber(1,9),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 5
    }
};

const level2 = {
    addition: {
        number1 : random.getNumber(5,9),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 3
    },
    subtraction: {
        number1 : random.getNumber(5,9),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 3
    },
    multiplication: {
        number1 : random.getNumber(1,5),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 2
    },
    division: {
        number1 : random.getNumber(1,5),
        number2 : random.getNumber(1,9),
        numberOfQuestions : 2
    }
};

const level3 = {
    addition: {
        number1 : random.getNumber(10,99),
        number2 : random.getNumber(4,9),
        numberOfQuestions : 3
    },
    subtraction: {
        number1 : random.getNumber(10,99),
        number2 : random.getNumber(7,19),
        numberOfQuestions : 3
    },
    multiplication: {
        number1 : random.getNumber(6,9),
        number2 : random.getNumber(6,9),
        numberOfQuestions : 2
    },
    division: {
        number1 : random.getNumber(6,9),
        number2 : random.getNumber(6,9),
        numberOfQuestions : 2
    }
};

const level4 = {
    addToNumber: {
        number1 : random.getNumber(10,99),
        number2 : fixed.getNumber(100),
        numberOfQuestions : 3
    },
    multiplication: {
        number1 : random.getNumber(6,12),
        number2 : random.getNumber(6,12),
        numberOfQuestions : 2
    },
    division: {
        number1 : random.getNumber(6,9),
        number2 : random.getNumber(6,9),
        numberOfQuestions : 2
    }
};

const level5 = {
    addition: {
        number1 : random.getNumber(10,99),
        number2 : random.getNumber(10,99),
        numberOfQuestions : 3
    },
    subtraction: {
        number1 : random.getNumber(10,99),
        number2 : random.getNumber(10,99),
        numberOfQuestions : 3
    },
    multiplication: {
        number1 : random.getNumber(6,12),
        number2 : random.getNumber(6,12),
        numberOfQuestions : 2
    },
    division: {
        number1 : random.getNumber(6,9),
        number2 : random.getNumber(6,9),
        numberOfQuestions : 2
    }
};

const levels = [
    level1,
    level2,
    level3,
    level4,
    level5
];

module.exports = levels;