import Link from "next/link";

import styles from "./post-styles.module.css";

const PageFooter = (): JSX.Element => {
  return (
    <div className={`max-w-2xl mx-auto mb-28 ${styles.footer}`}>
      <hr />

      <ul className="flex justify-center list-none my-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/yi-an-lai-andrew/"
            target="_blank"
          >
            LinkedIn
          </Link>
        </li>
        <li>
          <Link href="https://www.strava.com/athletes/yianlai" target="_blank">
            Strava
          </Link>
        </li>
      </ul>
      <p className="text-center text-brand-200">
        Pedal Powered Dev - {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default PageFooter;
