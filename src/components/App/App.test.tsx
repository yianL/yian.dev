import ReactDOM from "react-dom";
import App from ".";

import data from "../../../data.json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App data={data} version="1.0" />, div);
  ReactDOM.unmountComponentAtNode(div);
});
