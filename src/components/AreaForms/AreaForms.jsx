import "./AreaForms.css"
import Logo from "../Logo/Logo"
import { Link } from 'react-router-dom'

export default function AreaForms({subtitulo, textoLink, destinoLink, children}) {
    return(
        <>
            <div className="container__main">
                <div className="container__conta">
                    <div className="container__logo">
                        <div className="logo__texto">
                            <Link to="/" className="logo__forms"><Logo /></Link>
                        </div>
                        <p className="logo__subtitulo">{subtitulo}</p>
                    </div>
                    <div className="container__forms">
                        {children}
                    </div>
                </div>
                <div className="nav__cadastro">
                    <Link className="link__login" to={destinoLink}>{textoLink}</Link>
                    <nav>
                        <a>Ajuda</a>
                        <a>Política de Privacidade</a>
                        <a>Termos de Uso</a>
                    </nav>
                </div>
            </div>
        </>
    )
}