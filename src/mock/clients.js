let clients = [
  {
    id: 1,
    name: "Carlos Pérez",
    age: 32,
    weight: 78,
    height: 175,
    goals: "Ganar masa muscular",
    lastSession: "2023-05-15",
    progress: 65,
    profilePhoto: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0GFBYty218H2UmiVoIaLRWrsnGtKNMgQEykZY",
    email: "carlos@example.com",
    address: "Calle Fitness 123, Ciudad Saludable",
    preferredHours: "Lunes a Viernes: 7pm - 9pm",
    emergencyContact: {
      name: "María Pérez",
      phone: "+1 234 567 891",
      relationship: "Esposa"
    },
    muscleLessons: [
      "Cuádriceps necesita fortalecimiento",
      "Hombros con poca movilidad"
    ],
    targetProblems: [
      "Dolor lumbar al levantar peso",
      "Falta de resistencia cardiovascular"
    ],
    medicalInfo: [
      { condition: "Hipertensión", severity: "Leve", restrictions: "Evitar ejercicios de alta intensidad" }
    ],
    paymentMethods: [
      { type: "Tarjeta de Crédito", details: " 4532", primary: true }
    ],
    stretchingExercises: [
      { name: "Estiramiento de Cuádriceps", duration: "30 segundos por pierna", difficulty: "Principiante", area: "Piernas" }
    ]
  }
];

export const addClient = (newClientData) => {
  const newId = clients.length > 0 ? Math.max(...clients.map(c => c.id)) + 1 : 1;
  const newClient = {
    id: newId,
    ...newClientData,
    profilePhoto: newClientData.profilePhoto || 'https://via.placeholder.com/150?text=Nuevo+Cliente',
    lastSession: newClientData.lastSession || new Date().toISOString().split('T')[0],
    progress: newClientData.progress || 0,
    emergencyContact: newClientData.emergencyContact || { name: '', phone: '', relationship: '' },
    muscleLessons: newClientData.muscleLessons || [],
    targetProblems: newClientData.targetProblems || [],
    medicalInfo: newClientData.medicalInfo || [],
    paymentMethods: newClientData.paymentMethods || [],
    stretchingExercises: newClientData.stretchingExercises || []
  };
  clients.push(newClient);
  return newClient;
};

export default clients;