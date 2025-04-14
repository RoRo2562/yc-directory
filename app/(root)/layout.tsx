import Navbar from "../components/Navbar";
import Home from "./page";

export default function Layout({children}:Readonly<{children:React.ReactNode}>){
    return (
        <main className="font-work-sans">
            <Navbar />
            <Home />
        </main>
    )
}

