import { v4 as uuidv4 } from 'uuid';

export const users = [
    { 
      id: uuidv4(),
      email: "test@email.com",
      password: "test1234",
      firstName: "Test",
      lastName: "Test",
      age: 30,
      country: "US",
      isAdmin: false,
    }
]
