import { prompt } from "./prompt.js";

const LIMIT_NUMBER = 100000000000000;
const OPERATIONS = {
  1: {
    symbol: "+",
    name: "Addition",
    fn: (a, b) => a + b,
  },
  2: {
    symbol: "-",
    name: "Soustraction",
    fn: (a, b) => a - b,
  },
  3: {
    symbol: "*",
    name: "Multiplication",
    fn: (a, b) => a * b,
  },
  4: {
    symbol: "/",
    name: "Division",
    fn: (a, b) => a / b,
  },
};

const promptOperator = () => {
  console.log(`\nChoose an operator :
    1. ${OPERATIONS[1].name}
    2. ${OPERATIONS[2].name}
    3. ${OPERATIONS[3].name}
    4. ${OPERATIONS[4].name}`);

  const operator = Number(prompt("\nEnter the operator : "));
  if (!OPERATIONS.hasOwnProperty(operator)) {
    console.log(
      "\nError : You can only choose an operator between  1, 2, 3 or 4."
    );
    return promptOperator();
  } else return operator;
};

const validateNumber = (number) => {
  if (Math.abs(number) < LIMIT_NUMBER && !Number.isNaN(number)) return number;
  console.log(
    `Error : number is not a number or is too big / too small(max: ${LIMIT_NUMBER})`
  );
  process.exit(1);
};

const promptNumber = (message) => {
  const number = Number(prompt(message));
  return validateNumber(number);
};

const getMessageResult = (
  operator,
  nameOperator,
  firstNumber,
  secondNumber,
  result
) => {
  return `The result of ${nameOperator} ${firstNumber} ${operator} ${secondNumber} is : ${result}`;
};

const calculateResult = (operator, firstNumber, secondNumber) => {
  return getMessageResult(
    OPERATIONS[operator].symbol,
    OPERATIONS[operator].name,
    firstNumber,
    secondNumber,
    OPERATIONS[operator].fn(firstNumber, secondNumber)
  ).toLowerCase();
};

const main = () => {
  console.log("ADDITION-MASTER ™️");

  const operator = promptOperator();

  const firstNumber = promptNumber("\nEnter the first number : ");
  const secondNumber = promptNumber("Enter the second number : ");

  if (operator === 4 && secondNumber === 0) {
    console.log("Error : division by 0");
    process.exit(1);
  }

  console.log(calculateResult(operator, firstNumber, secondNumber));
};

main();
