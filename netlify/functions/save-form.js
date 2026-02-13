const { MongoClient } = require("mongodb");
const client = new MongoClient(process.env.MONGODB_URI);

exports.handler = async (event) => {
  try {
    const data = JSON.parse(event.body); // full form JSON

    await client.connect();
    const db = client.db("deliveryFormDB");
    const collection = db.collection("formSubmissions");

    await collection.insertOne({
      ...data,
      timestamp: new Date()
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ saved: true })
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  } finally {
    await client.close();
  }
};
