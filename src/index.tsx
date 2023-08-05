import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Signature } from "./utils/constants";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
};

const initFirebase = async () => {
  const FirebaseConfig = process.env.REACT_APP_FIREBASE_CONFIG_JSON
    ? JSON.parse(process.env.REACT_APP_FIREBASE_CONFIG_JSON)
    : await (await fetch("/__/firebase/init.json")).json();
  const app = initializeApp(FirebaseConfig);
  // Initialize Analytics
  getAnalytics(app);
};

(async function init() {
  await initFirebase();

  const data = await fetchData();

  console.log(Signature, "color: blue; font-weight: bold");
  console.log("Quick start: yian.skills.map(s => s.name).join(', ')");
  window.yian = { ...data };
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App data={data} version={process.env.REACT_APP_VERSION} />);
})();
