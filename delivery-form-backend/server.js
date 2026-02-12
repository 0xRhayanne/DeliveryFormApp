const express = require("express");
const dns = require("dns");
const didYouMean = require("didyoumean"); // optional typo suggestion

const app = express();

// ✅ Trusted domains list (expand as needed)
const trustedDomains = [
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  "hotmail.com",
  "proton.me"
];

// ✅ Valid TLDs (basic set, you can expand)
const validTlds = ["com", "net", "org", "me", "io", "edu", "gov"];

app.get("/api/check-domain", (req, res) => {
  const domain = req.query.domain;

  // Step 1: TLD check
  const tld = domain.split(".").pop();
  if (!validTlds.includes(tld)) {
    return res.json({ valid: false, reason: "Invalid TLD" });
  }

  // Step 2: Trusted list check
  if (!trustedDomains.includes(domain)) {
    // Step 2a: Suggest correction if typo
    const suggestion = didYouMean(domain, trustedDomains);
    if (suggestion && suggestion !== domain) {
      return res.json({ valid: false, reason: `Did you mean ${suggestion}?` });
    }
    return res.json({ valid: false, reason: "Domain not trusted" });
  }

  // Step 3: MX lookup
  dns.resolveMx(domain, (err, addresses) => {
    if (err || !addresses || addresses.length === 0) {
      return res.json({ valid: false, reason: "No MX records" });
    }
    res.json({ valid: true });
  });
});

// ✅ Start backend server
app.listen(3001, () => {
  console.log("Server running on port 3001");
});
