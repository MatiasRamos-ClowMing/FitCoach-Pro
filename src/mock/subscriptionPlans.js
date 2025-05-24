const subscriptionPlans = [
  {
    id: 1,
    name: "Básico",
    price: 19.99,
    features: [
      "Acceso a rutinas básicas",
      "Seguimiento de progreso",
      "1 sesión de coaching al mes"
    ],
    popular: false
  },
  {
    id: 2,
    name: "Premium",
    price: 39.99,
    features: [
      "Todas las rutinas avanzadas",
      "Seguimiento detallado",
      "4 sesiones de coaching al mes",
      "Acceso a comunidad exclusiva"
    ],
    popular: true
  },
  {
    id: 3,
    name: "Elite",
    price: 79.99,
    features: [
      "Plan personalizado",
      "Sesiones ilimitadas",
      "Nutrición personalizada",
      "Acceso prioritario 24/7"
    ],
    popular: false
  }
];

export default subscriptionPlans;