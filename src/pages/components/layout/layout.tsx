import Footer from "./footer";
import Header from "./header";

type porps={
    children:JSX.Element
}

const Layout:React.FC<porps>= ({children})=> {  
    return ( <main className="flex flex-col  h-screen min-h-screen" >
            <div className="">
            <Header/>

            </div>

                <div className="flex-grow pb-10  " >
                    {children}
                </div >

                <div className="mt-auto ">

            <Footer/>
                </div>
    </main> );
}
 
export default Layout;