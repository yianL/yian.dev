import NeonText from "../NeonText";
import TypeWriter from "../TypeWriter";
import Menu from "../Menu";
import HashtagBackground from "../HashtagBackground";
import "./App.css";

type DataType = typeof import("../../../public/data.json");

const App = ({ data }: { data: DataType }) => {
  const { firstName, lastName, facts, skills } = data;
  const expertSkills = skills
    .filter((s) => s.level === "expert")
    .map((s) => s.name);
  const moderateSkills = skills
    .filter((s) => s.level === "moderate")
    .map((s) => s.name);

  return (
    <div className="app">
      <div id="scene" className="background">
        <div className="layer" data-depth="0.2">
          <HashtagBackground hashtags={moderateSkills} />
        </div>
        <div className="layer" data-depth="0.4">
          <HashtagBackground hashtags={expertSkills} />
        </div>
      </div>
      <div className="container">
        <div className="title">
          <div className="first">
            <NeonText r={255} g={0} b={60}>
              {firstName}
            </NeonText>
          </div>

          <div className="last">
            <NeonText r={38} g={149} b={255} animation="buzz">
              {lastName}
            </NeonText>
          </div>
        </div>
        <div className="side">
          <Menu onShuffle={() => {}} />
        </div>
        <div className="footer">
          <TypeWriter phrases={facts} />
        </div>
      </div>
    </div>
  );
};

export default App;
