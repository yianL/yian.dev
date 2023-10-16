import PostType from "../interfaces/post";
import PostList from "./post-list";
import Logo from "./ppd-logo";

type Props = {
  posts: PostType[];
};

const Home = ({ posts }: Props): JSX.Element => {
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between md:h-screen">
      <div className="flex flex-col items-center md:w-5/12 gap-2 py-16 md:py-0">
        <Logo />
        <h1>Yi-An Lai</h1>
        <h2>Fullstack Dev | Roadie</h2>
        <div className="flex flex-row items-center justify-center gap-2 text-4xl min-h-[40px]">
          <a href="https://www.linkedin.com/in/yi-an-lai-andrew/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/yianL">
            <i className="fa-brands fa-square-github"></i>
          </a>
          <a href="https://www.strava.com/athletes/32534779">
            <i className="fa-brands fa-strava"></i>
          </a>
          <a href="https://docs.google.com/document/d/1VpCJXs3vGY7mk4KDMjQkLSZmTz399kFW-lUGZVxjZXo/edit?usp=sharing">
            <i className="fa-regular fa-address-card"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center md:w-7/12 p-4">
        <PostList posts={posts} />
      </div>
    </div>
  );
};

export default Home;
