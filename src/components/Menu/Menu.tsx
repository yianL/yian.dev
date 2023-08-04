import "./Menu.css";

const Menu = ({ onShuffle = () => {} }) => {
  return (
    <ul className="menu">
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yianL"
        >
          github/
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/yi-an-lai-andrew"
        >
          linkedin/
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/yianL/yian.dev"
        >
          src/
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/1VpCJXs3vGY7mk4KDMjQkLSZmTz399kFW-lUGZVxjZXo/edit?usp=sharing"
        >
          resume.doc
        </a>
      </li>
      <li onClick={onShuffle}>shuffle.sh</li>
    </ul>
  );
};

export default Menu;
