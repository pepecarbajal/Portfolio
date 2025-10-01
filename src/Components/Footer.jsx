const Footer = ({name}) => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full bg-background mt-16 py-8 border-t border-subtext/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                
                <p className="text-sm text-subtext mb-3">
                    © {currentYear} {name}. Todos los derechos reservados.
                </p>

                <p className="text-xs text-subtext/70 space-x-3">
                    <span>Desarrollado con React y Tailwind CSS.</span>
                    <span className="inline-block mx-2">|</span>
                    <span>
                        Iconos por Freepik {" "}
                        <a 
                            href="https://www.flaticon.com/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="hover:text-textmain transition-colors duration-200"
                        >
                            [Flaticon]
                        </a>
                    </span>
                </p>
            </div>
        </footer>
    );
}

export default Footer;