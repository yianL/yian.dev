import { parseISO, format } from "date-fns";

interface Props {
  dateString: string;
}

const displayTimestamp = (isoTimestamp: string): string => {
  const date = new Date(isoTimestamp);

  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  });
};

const DateFormatter = ({ dateString }: Props): JSX.Element => {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
};

export default DateFormatter;
