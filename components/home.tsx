const Home = (): JSX.Element => {
  return (
    <div className="flex-col md:flex-row flex items-center md:justify-between md:h-screen">
      <div className="flex flex-col items-center basis-full md: md:w-400 gap-2">
        <h1>Yi-An Lai</h1>
        <h2>Pedal-Powered Development</h2>
        <div className="flex flex-row items-center justify-center gap-2">
          <a href="https://www.linkedin.com/in/yi-an-lai-andrew/">
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
          <a href="https://github.com/yianL">
            <i className="fab fa-github fa-2x"></i>
          </a>
          <a href="https://docs.google.com/document/d/1VpCJXs3vGY7mk4KDMjQkLSZmTz399kFW-lUGZVxjZXo/edit?usp=sharing">
            <i className="fas fa-file-lines fa-2x"></i>
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center basis-full">
        <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas
          voluptas saepe voluptates fugit provident, ipsa repudiandae recusandae
          aperiam quaerat modi dolorem esse perspiciatis ducimus placeat vel!
          Illo nihil facere saepe.
        </h4>
      </div>
    </div>
  );
};

export default Home;
