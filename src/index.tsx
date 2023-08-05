import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Signature } from "./utils/constants";
import pac from "../package.json";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

async function fetchData() {
  try {
    const response = await fetch(`${process.env.PUBLIC_URL}/data.json`);
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}

(async function init() {
  const FirebaseConfig = await (await fetch("/__/firebase/init.json")).json();
  const app = initializeApp(FirebaseConfig);
  // Initialize Analytics
  getAnalytics(app);

  const data = await fetchData();

  console.log(Signature, "color: blue; font-weight: bold");
  console.log("Quick start: yian.skills.map(s => s.name).join(', ')");
  window.yian = { ...data };
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );
  root.render(<App data={data} version={pac.version} />);
})();
