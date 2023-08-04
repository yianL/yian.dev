import "./HashtagBackground.css";

const randomInt = (max: number) => Math.round(Math.random() * max);

type HashtagBackgroundPropsType = {
  hashtags?: string[];
};

const HashtagBackground = ({ hashtags = [] }: HashtagBackgroundPropsType) => {
  return (
    <div className="hashtags">
      {hashtags.map((hashtag) => (
        <div
          key={hashtag}
          className="hashtag"
          style={{
            transform: `rotate(${randomInt(8) - 4}deg)
              translate(${randomInt(100)}vw, ${randomInt(100)}vh)`,
          }}
        >
          {`#${hashtag}`}
        </div>
      ))}
    </div>
  );
};

export default HashtagBackground;
