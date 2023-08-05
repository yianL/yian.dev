import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const initFirebase = async () => {
  const FirebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG_JSON
    ? JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_JSON)
    : await (await fetch("/__/firebase/init.json")).json();
  const app = initializeApp(FirebaseConfig);
  getAnalytics(app);
  return app;
};
