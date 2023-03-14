import Footer from "./footer";
import Header from "./header";

type porps = {
  children: JSX.Element;
};

const Layout: React.FC<porps> = ({ children }) => {
  return (
    <main className="flex flex-col  h-1 min-h-screen relative">
      <div className=" fixed top-0 right-0 left-0 ">
        <Header />
      </div>

        <div className="w-full pt-14 h-full ">
        {children}
        </div>
      
    </main>
  );
};

export default Layout;
