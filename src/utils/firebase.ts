import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { initializeAppCheck, ReCaptchaV3Provider } from "firebase/app-check";

export const initFirebase = async () => {
  const FirebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG_JSON
    ? JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_JSON)
    : await (await fetch("/__/firebase/init.json")).json();
  const app = initializeApp(FirebaseConfig);

  if (process.env.REACT_APP_DEV_MODE) {
    return app;
  }

  // Initialize analytics
  getAnalytics(app);

  // Initialize app check
  initializeAppCheck(app, {
    provider: new ReCaptchaV3Provider(
      "6Lc1DYQnAAAAACkl1QIcQnQffVxGPjJmjuOI0aqJ"
    ),
    isTokenAutoRefreshEnabled: true,
  });

  return app;
};
