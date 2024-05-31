import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";
import firebase from "firebase/compat/app";
import { getMessaging, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyCCR9VGfOchUKWTcbLBabjeBJ8bJ8JQ9Yg",
    authDomain: "last-12b3a.firebaseapp.com",
    databaseURL: "https://last-12b3a-default-rtdb.firebaseio.com",
    projectId: "last-12b3a",
    storageBucket: "last-12b3a.appspot.com",
    messagingSenderId: "720027948546",
    appId: "1:720027948546:web:f515675c5679f8bc7c791b",
    measurementId: "G-7BT5JLG6R2"
};

firebase.initializeApp(firebaseConfig)

export const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const onMessaging = onMessage


export const db = getFirestore(app);
export const vertexAI = getVertexAI(app);
export const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-pro-preview-0409" });

