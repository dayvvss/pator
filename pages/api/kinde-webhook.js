import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, given_name, family_name, picture } = req.body;

    try {
      // Check if the user already exists
      const existingUser = await prisma.users.findUnique({
        where: { email },
      });

      if (existingUser) {
        return res.status(400).json({ error: 'User already exists' });
      }

      // Create a new user
      const newUser = await prisma.users.create({
        data: {
          username: given_name || family_name || 'User',
          email,
          password_hash: '', // Password is managed by Kinde
          // Add any additional fields you want to store
        },
      });

      res.status(201).json({ message: 'User registered successfully', user: newUser });
    } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

