const dns = require("dns");
const didYouMean = require("didyoumean");

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

  // Step 1: TLD check
  const tld = domain.split(".").pop();
  if (!validTlds.includes(tld)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: false, reason: "Invalid TLD" }),
    };
  }

  // Step 2: Trusted list check
  if (!trustedDomains.includes(domain)) {
    const suggestion = didYouMean(domain, trustedDomains);
    if (suggestion && suggestion !== domain) {
      return {
        statusCode: 200,
        body: JSON.stringify({ valid: false, reason: `Did you mean ${suggestion}?` }),
      };
    }
    return {
      statusCode: 200,
      body: JSON.stringify({ valid: false, reason: "Domain not trusted" }),
    };
  }

  // Step 3: MX lookup
  return new Promise((resolve) => {
    dns.resolveMx(domain, (err, addresses) => {
      if (err || !addresses || addresses.length === 0) {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ valid: false, reason: "No MX records" }),
        });
      } else {
        resolve({
          statusCode: 200,
          body: JSON.stringify({ valid: true }),
        });
      }
    });
  });
};
