import Alert from "./alert";
import Footer from "./footer";

interface Props {
  preview?: boolean;
  children: React.ReactNode;
}

const Layout = ({ preview, children }: Props): JSX.Element => {
  return (
    <>
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
