import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer";

function Home() {
    return (
        <>
            <Header />
            <main>
            <Outlet/>
            </main>
            <Footer/>
        </>
    )
}

export default Home;