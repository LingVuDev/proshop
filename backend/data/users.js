import bcrypt from 'bycrptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@example.com',
    passowrt: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    passowrt: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    passowrt: bcrypt.hashSync('123456', 10),
  },
];

export default users;