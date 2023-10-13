import Nav from './Nav'

function Header(){
    return(
        <header>
            <span>
                MENU
            </span>
            <div>
                <img src="logoDepartamento.src" alt="Logo Departamento" />
            </div>
            <div>
                <Nav />
            </div>
      </header>
    )
}

export default Header