import '../EstilosComponentes/Header.css'

const Header = () => {
    return (
        <>
            <header className="header play-regular">
                <nav className='navHeader'>
                    <ul className='ulnavbar'>
                        <li><a href="">HOMBRE</a></li>
                        <li><a href="">MUJER</a></li>
                        <li><a href="">NIÑOS</a></li>
                        <li><a href="">INGRESOS</a></li>
                        <li><a href="">OFERTAS</a></li>
                    </ul>
                </nav>
                <h1>
                    Jersey Arg
                </h1>
                <nav className='navHeader'>
                    <ul className='ulnavbar'>
                    <li><a href="">INICIO</a></li>
                    <li><a href="">CARRITO</a></li>
                    <li><a href="">CUENTA</a></li>
                    <li><a href="">AYUDA</a></li>
                    <li><a href="">NOSOTROS</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;