const paymentMethods = [
  {
    id: 1,
    type: "Tarjeta de Crédito",
    lastFour: " 4532",
    primary: true
  },
  {
    id: 2,
    type: "PayPal",
    email: "cliente@example.com",
    primary: false
  },
  {
    id: 3,
    type: "Transferencia Bancaria",
    account: "Banco Nacional",
    primary: false
  }
];

export default paymentMethods;