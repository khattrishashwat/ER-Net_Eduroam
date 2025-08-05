import Header from "./header";
import Footer from "./footer";

const layout = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);
export default layout;
