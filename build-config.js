const fs = require('fs');

const content = `
const firebaseConfig = {
  apiKey: "${process.env.FIREBASE_API_KEY}",
  authDomain: "${process.env.FIREBASE_AUTH_DOMAIN}",
  databaseURL: "${process.env.FIREBASE_DATABASE_URL}",
  projectId: "${process.env.FIREBASE_PROJECT_ID}",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();
`;

fs.writeFileSync('firebase-config.js', content);

