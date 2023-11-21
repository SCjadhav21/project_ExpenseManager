export const getAmountByCategory = (array, category) => {
  const result = array.filter((item) => item.category === category);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
};
export const getAmountPaymentSource = (array, paymentSource) => {
  const result = array.filter((item) => item.paymentSource === paymentSource);

  const totalAmount = result.reduce((sum, item) => sum + item.amount, 0);

  return totalAmount;
};
export const getDate = (date) => {
  date = date.split("T");

  return date[0];
};
export const getUserName = (name) => {
  let words = name.split(" ");
  let firstLetters = words.map((word) => word.charAt(0));
  let result = firstLetters.join("");
  return result.toUpperCase();
};
