import { initializeApp } from "firebase/app";
import { getVertexAI, getGenerativeModel } from "firebase/vertexai-preview";

const firebaseConfig = {
    apiKey: "AIzaSyCCR9VGfOchUKWTcbLBabjeBJ8bJ8JQ9Yg",
    authDomain: "last-12b3a.firebaseapp.com",
    projectId: "last-12b3a",
    storageBucket: "last-12b3a.appspot.com",
    messagingSenderId: "720027948546",
    appId: "1:720027948546:web:f515675c5679f8bc7c791b",
    measurementId: "G-7BT5JLG6R2"
};

export const app = initializeApp(firebaseConfig);

const vertexAI = getVertexAI(app);
export const model = getGenerativeModel(vertexAI, { model: "gemini-1.5-pro-preview-0409" });
