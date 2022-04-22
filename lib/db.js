import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
  const client = await MongoClient.connect("mongodb+srv://akbenn:akbenn@cluster0.rnyfn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
  return client;
}
