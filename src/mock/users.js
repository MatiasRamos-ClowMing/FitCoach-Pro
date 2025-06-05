let users = [
  {
    id: 1,
    name: "Carlos Pérez",
    email: "cliente1@fitcoach.com",
    password: "123456",
    verified: true,
    role: "client",
    profilePhoto: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0GFBYty218H2UmiVoIaLRWrsnGtKNMgQEykZY" // Foto actualizada
  },
  {
    id: 2,
    name: "Edilson Pelaez",
    email: "pelaezedilson83@gmail.com",
    password: "123456",
    verified: true,
    role: "admin",
    profilePhoto: "https://via.placeholder.com/50?text=EP"
  },
   {
    id: 3,
    name: "Lorena Coach",
    email: "lorenacoach.08@gmail.com",
    password: "123456",
    verified: true,
    role: "trainer",
    profilePhoto: "https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0zlQxkqeYLtCPgmTbn59N6BRyWUl87afK30Dw"
  }
];

import { addHistoryEntry } from './history';

export const addUser = (newUser) => {
  const userExists = users.some(user => user.email === newUser.email);
  if (userExists) {
    throw new Error('El email ya está registrado');
  }
  
  const user = {
    id: users.length + 1,
    ...newUser,
    verified: true,
  };
  
  users.push(user);
  return user;
};

export const verifyUser = (email, code) => {
  const user = users.find(u => u.email === email);
  if (!user) {
    throw new Error('Usuario no encontrado');
  }
  
  if (code === "123456") {
    user.verified = true;
    return true;
  }
  
  return false;
};

export const getUsers = () => users;

// DONE