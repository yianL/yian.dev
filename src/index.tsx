import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { Signature } from "./utils/constants";
import { onValue } from "./utils/database";
import { initFirebase } from "./utils/firebase";

(async function init() {
  console.log(Signature, "color: blue; font-weight: bold");
  console.log("Quick start: yian.skills.map(s => s.name).join(', ')");

  await initFirebase();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  onValue("profile", (data) => {
    window.yian = { ...data };
    root.render(<App data={data} version={process.env.REACT_APP_VERSION} />);
  });
})();
