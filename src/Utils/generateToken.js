import { messaging } from "./fcmConfig";
import { getToken } from "firebase/messaging";

export const generateToken = (setToken) => {
    console.log('requesting user permission ....');

    Notification.requestPermission().then(permission => {
        if (permission == "granted") {
            console.error("Permission granted for notifications");
        
            getToken(messaging, {
              vapidKey: "BN2Aln6A5nd6MwIsMtSIpO_IZgA9E7FWbTHpYsXgYHbe_nVapBNITL5lfYvhpGDAPAyRwI1ml5jck2vcW9QgmLw",
            })
              .then((currentToken) => {
                if (currentToken) {
                  setToken(currentToken);
                  console.log(currentToken);
                } else {
                  console.warn("No registration token available.");
                }
              })
              .catch((error) => {
                console.log("An error occurred while retrieving token:", error);
              });
        
            
          } else {
            console.log('User permission denied');
          }
    })



  if ("serviceWorker" in navigator) {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log(
          "Service Worker registered with scope:",
          registration.scope
        );
      })
      .catch((error) => {
        console.log("Service Worker registration failed:", error);
      });
  }
};

// onMessaging(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // Customize notification here
// });
