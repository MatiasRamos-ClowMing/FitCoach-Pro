let users = [
  {
    id: 1,
    name: "Carlos Pérez",
    email: "cliente1@fitcoach.com",
    password: "SecurePass123",
    verified: true,
    role: "client"
  },
  {
    id: 2,
    name: "Edilson Pelaez",
    email: "pelaezedilson83@gmail.com",
    password: "123456",
    verified: true,
    role: "client" // O el rol que necesites
  }
];

export const addUser = (newUser) => {
  const userExists = users.some(user => user.email === newUser.email);
  if (userExists) {
    throw new Error('El email ya está registrado');
  }
  
  const user = {
    id: users.length + 1,
    ...newUser,
    verified: false,
    role: "client"
  };
  
  users.push(user);
  return user;
};

export const verifyUser = (email, code) => {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  
  // Simular verificación (en realidad compararíamos con código enviado)
  if (code === "123456") { // Código hardcodeado para demo
    user.verified = true;
    return true;
  }
  
  return false;
};

export const getUsers = () => users;

// DONE