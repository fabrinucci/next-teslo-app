import type { NextApiRequest, NextApiResponse } from 'next';
import { db, seedDatabase } from '../../database';
import { Product } from '../../models';

type Data = {
  message: string
}

export default async function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {

  if( process.env.NODE_ENV === 'production' ) {
    res.status(401).json({ message: 'You do not have access to this api' })
  }

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  res.status(201).json({ message: 'Successful process' })
}