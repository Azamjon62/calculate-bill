/* eslint-disable max-len */
/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


const functions = require("firebase-functions");
const admin = require("firebase-admin");

// Initialize Firebase Admin SDK
admin.initializeApp();

const db = admin.firestore();

// Cloud Function to add data to Firestore and send a notification
exports.addDataToFirestore = functions.https.onRequest(async (req, res) => {
  // CORS handling
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Methods", "GET, POST");

  if (req.method === "OPTIONS") {
    res.set("Access-Control-Allow-Headers", "Content-Type");
    res.status(204).send("");
    return;
  }

  const {collectionName, data} = req.body;

  try {
    const docRef = await db.collection(collectionName).add(data);
    res.status(200).send({id: docRef.id});
  } catch (error) {
    console.error("Error adding document:", error);
    res.status(500).send("Error adding document");
  }
});


exports.sendNotification = functions.firestore.document("users/{userId}")
    .onCreate(async (snapshot, context) => {
    // Get the new user data from the snapshot
      const newUser = snapshot.data();
      const token = newUser.token;

      if (token) {
        const payload = {
          notification: {
            title: "Welcome!",
            body: `Hello ${newUser.name || "User"}, you have successfully signed in!`,
          },
        };

        try {
          const response = await admin.messaging().sendToDevice(token, payload);
          console.log("Notification sent successfully:", response);
        } catch (error) {
          console.error("Error sending notification:", error);
        }
      } else {
        console.log("No token available for the new user");
      }
    });
