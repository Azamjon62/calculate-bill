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


exports.sendNotification = functions.firestore
    .document("users/{userId}")
    .onCreate(async (snapshot, context) => {
    // Get the new user data from the snapshot
      const newUser = snapshot.data();

      try {
      // Retrieve all user tokens from the Firestore 'users' collection
        const tokensSnapshot = await db.collection("users")
            .where("signedIn", "==", true)
            .get();
        const tokens = tokensSnapshot.docs.map((doc) => doc.data().token).filter(Boolean);

        if (tokens.length > 0) {
        // Construct the notification payload
          const payload = {
            notification: {
              title: "Successfully signed",
              body: `Welcome: ${newUser.name || "Unnamed"}`, // Use the new user's name or a default value
            },
          };

          // Send notifications to all tokens
          const response = await admin.messaging().sendToDevice(tokens, payload);

          console.log("Notifications sent successfully:", response);
        } else {
          console.log("No tokens available to send notifications");
        }
      } catch (error) {
        console.error("Error sending notifications:", error);
      }
    });
