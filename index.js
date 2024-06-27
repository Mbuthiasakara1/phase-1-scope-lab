// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "carol";

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  bestCustomer = "not bob";
  return bestCustomer;
}
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}
function changeLeastFavoriteCustomer() {
  try {
    leastFavoriteCustomer = "not carol";
  } catch (e) {
    throw new Error("Assignment to constant variable.");
  }
}
