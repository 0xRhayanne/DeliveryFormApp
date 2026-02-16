const express = require("express");
const dns = require("dns");
const didYouMean = require("didyoumean");

const app = express();

// ✅ Trusted domains list
const trustedDomains = [
  "gmail.com",
  "outlook.com",
  "yahoo.com",
  "hotmail.com",
  "proton.me"
];

// ✅ Valid TLDs
const validTlds = ["com", "net", "org", "me", "io", "edu", "gov"];

// Health check route
app.get("/health", (req, res) => {
  res.json({ alive: true, timestamp: new Date() });
});

// Domain check route
app.get("/api/check-domain", (req, res) => {
  const domain = req.query.domain;

  // Step 1: TLD check
  const tld = domain.split(".").pop();
  if (!validTlds.includes(tld)) {
    return res.json({ valid: false, reason: "Invalid TLD" });
  }

  // Step 2: Trusted list check
  if (!trustedDomains.includes(domain)) {
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

// ✅ Root route (homepage)
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Start backend server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
