const dns = require("dns");
const didYouMean = require("didyoumean");
const { MongoClient } = require("mongodb");

const client = new MongoClient(process.env.MONGODB_URI);

const trustedDomains = [
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  "hotmail.com",
  "proton.me"
];

const validTlds = ["com", "net", "org", "me", "io", "edu", "gov"];

exports.handler = async (event) => {
  const domain = event.queryStringParameters.domain;
  let result;

  // Step 1: TLD check
  const tld = domain.split(".").pop();
  if (!validTlds.includes(tld)) {
    result = { valid: false, reason: "Invalid TLD" };
  } else if (!trustedDomains.includes(domain)) {
    // Step 2: Trusted list check
    const suggestion = didYouMean(domain, trustedDomains);
    if (suggestion && suggestion !== domain) {
      result = { valid: false, reason: `Did you mean ${suggestion}?` };
    } else {
      result = { valid: false, reason: "Domain not trusted" };
    }
  } else {
    // Step 3: MX lookup
    result = await new Promise((resolve) => {
      dns.resolveMx(domain, (err, addresses) => {
        if (err || !addresses || addresses.length === 0) {
          resolve({ valid: false, reason: "No MX records" });
        } else {
          resolve({ valid: true });
        }
      });
    });
  }

  // Step 4: Save result to MongoDB
  try {
    await client.connect();
    const db = client.db("deliveryFormDB");
    const collection = db.collection("domainChecks");

    await collection.insertOne({
      domain,
      result,
      timestamp: new Date()
    });
  } catch (err) {
    console.error("MongoDB insert error:", err);
  } finally {
    await client.close();
  }

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
