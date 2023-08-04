import rgb2hsl from "rgb-to-hsl";
import cn from "classnames";
import "./NeonText.css";

const getStyles = (r: number, g: number, b: number) => {
  const rgb = `${r},${g},${b}`;
  const color = rgb2hsl(r, g, b);
  return {
    color: `hsl(${Math.round(color[0])}, ${color[1]}, 90%)`,
    textShadow: `
    0 0 0 transparent,
    0 0 10px rgb(${rgb}),
    0 0 20px rgba(${rgb},.5),
    0 0 40px rgba(${rgb},1),
    0 0 100px rgba(${rgb},1),
    0 0 200px rgba(${rgb},1)`,
  };
};

type NeonTextPropsType = {
  className?: string;
  children: React.ReactNode;
  r?: number;
  g?: number;
  b?: number;
  animation?: "blink" | "buzz";
};

const NeonText = ({
  className,
  children,
  r = 255,
  g = 0,
  b = 60,
  animation = "blink",
}: NeonTextPropsType) => (
  <span
    className={cn("neon-text", className, animation)}
    style={getStyles(r, g, b)}
  >
    {children}
  </span>
);

export default NeonText;
