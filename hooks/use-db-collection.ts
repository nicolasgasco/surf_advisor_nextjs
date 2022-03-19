import { Collection, MongoClient } from "mongodb";

const useCollection = async (collectionName: string | undefined) => {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@sandbox.1ybr6.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
  );
  const db = client.db();

  const collection = db.collection(`${collectionName}`);

  return [client, collection];
};

export default useCollection;
