import Link from "next/link";

export const NavBar = () => {
    return(
        <nav className="text-xl font-bold hidden space-x-4 sm:flex sm:items-center">
            <Link href="/" className="text-white hover:text-yellow hover:underline">
              Inicio
            </Link>
            <Link href="/escalas" className="text-white hover:text-yellow hover:underline">
              Escalas
            </Link>
            <Link href="/coroinhas" className="text-white hover:text-yellow hover:underline">
              Coroinhas
            </Link>
        </nav>
    );
}