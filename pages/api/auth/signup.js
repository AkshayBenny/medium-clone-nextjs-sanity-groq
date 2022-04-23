// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { connectToDatabase } from '../../../lib/db';
import { hashPassword } from '../../../lib/auth';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const client = await connectToDatabase();
    const db = client.db();

    const data = req.body;
    const { email, password } = data;

    const existingUser = db.collection('users').findOne({ email: email });
    if (existingUser && Object.keys(existingUser).length()) {
      res.json({ message: 'User already exists', existingUser: existingUser });
      client.close();
      return;
    } //checks if user already exists

    if (
      !email ||
      !email.includes('@') ||
      !email.includes('.') ||
      !password ||
      password.trim().length < 7
    ) {
      res.status(422).json({ message: 'Invalid email or password' });
      return;
    }

    const hashedPassword = await hashPassword(password);
    await db.collection('users').insertOne({
      email: email,
      password: hashedPassword,
    });
    res.status(201).json({ message: 'Created user' });
    client.close();
  }
}
