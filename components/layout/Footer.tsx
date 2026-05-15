export const Footer = () => {
    return (
        <footer className="bg-theme w-screen h-14 mt-auto hidden md:flex items-center">
            <div className="container mx-auto h-full flex items-center justify-center px-4">
                <p className="text-white text-sm">
                    &copy; {new Date().getFullYear()} Tarcisio Web. Todos os direitos reservados.
                </p>
            </div>
        </footer>
    );
}