import Navbar from "../components/Navbar.js";

export default function MainLayout({children}){
    return(
        <>
        <Navbar/>
        <div className="container mt-4">{children}</div>
        </>
    );
}