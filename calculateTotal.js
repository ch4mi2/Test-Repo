function calculateTotal(price, quantity, discount = 0) {
  const total = price * quantity;
  return total - (total * discount); // Applying discount
}

module.exports = { calculateTotal };
