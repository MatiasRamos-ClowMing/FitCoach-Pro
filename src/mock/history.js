let history = [];

export const addHistoryEntry = (userEmail, action, details) => {
  const allowedEmails = ["pelaezedilson83@gmail.com", "lorenacoach.08@gmail.com"];
  
  if (!allowedEmails.includes(userEmail)) {
    console.warn(`Intento de modificación no autorizado por: ${userEmail}`);
    return; // No guardar si el usuario no está autorizado
  }

  const entry = {
    id: history.length + 1,
    timestamp: new Date().toISOString(),
    userEmail: userEmail,
    action: action, // Ej: 'ADD_USER', 'EDIT_USER', 'DELETE_USER'
    details: details // Detalles del cambio
  };
  history.push(entry);
  console.log("Historial actualizado:", history); // Para ver en consola
};

export const getHistory = () => history;