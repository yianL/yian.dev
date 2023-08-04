import ReactDOM from "react-dom";
import App from ".";

import data from "../../../public/data.json";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App data={data} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
