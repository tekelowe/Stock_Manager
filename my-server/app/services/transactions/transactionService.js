export const transactionService = {
 add: async (number1, number2) => {
  const sum = number1 + number2;
  console.log(`Sum is ${sum}`)
  return sum;
 }

}