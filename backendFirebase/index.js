const express = require('express');
var cors = require('cors')
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./serviceAccountKey.json");

app.use(cors())
admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://followdraw-b1171.firebaseio.com"
});
const db = admin.firestore();
app.get('/followers', async function(req, res) {
      const response = await db.collection('followersToDraw')
            .get()
            .then(snapshot => {
                  const data = []
                  snapshot.forEach(item => data.push({id: item.id, ...item.data() }))
                  return data
            })
      res.send(response)
});
app.listen(8000)