const { MongoClient } = require('mongodb');
const password = 'kantime@deepak00739';
const encodedPassword = encodeURIComponent(password);

// Replace the connection string with your own
const uri = 'mongodb+srv://deepakrana739:${encodedPassword}@cluster0.mtvcfiz.mongodb.net/';

async function connectToMongoDB() {
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    console.log('Connected to MongoDB');

    // You can perform database operations here

  } finally {
    await client.close();
    console.log('Disconnected from MongoDB');
  }
}

connectToMongoDB();
