import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./components/App";
import { Signature } from "./utils/constants";

fetch(`${process.env.PUBLIC_URL}/data.json`)
  .then((response) => {
    if (response.status >= 400) {
      throw new Error("Bad response from server");
    }
    return response.json();
  })
  .then((data) => {
    console.log(Signature, "color: blue; font-weight: bold");
    console.log("Quick start: yian.skills.map(s => s.name).join(', ')");
    window.yian = { ...data };
    const root = ReactDOM.createRoot(
      document.getElementById("root") as HTMLElement
    );
    root.render(<App data={data} />);
  });

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
