import Link from "next/link";
import { Button } from "./ui/button";

//! COMPONENTS
import Nav from "./nav";
import MobileNav from "./mobileNav";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/** LOGO */}
                <Link href={"/"}>
                    <h1 className="text-4xl font-semibold">
                        Gabriel <span className="text-accent">.</span>
                    </h1>
                </Link>

                {/** DESKTOP NAV & HIRE ME BUTTON */}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    <Link href={"/contact"}>
                        <Button>Hire me</Button>
                    </Link>
                </div>

                {/** MOBILE NAV */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}

export default Header