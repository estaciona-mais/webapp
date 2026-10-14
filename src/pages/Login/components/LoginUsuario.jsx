import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import "./LoginUsuario.css"

const dadosEsperados = {email: '', senha: ''}

export default function LoginUsuario({onConcluir}) {

    const [dados, setDados] = useState(dadosEsperados)
    const [aviso, setAviso] = useState('')

    function atualizarCampos(e) {
        setDados(d => ({...d, [e.target.name]: e.target.value}))
    }

    function enviar(e) {
        e.preventDefault()
        setAviso('')
        try {
            onConcluir(dados)
        } catch (erro) {
            setAviso(erro.message)
        }
    }

    return(
            <form className='form__login' onSubmit={enviar}>
                <label className="form__label" htmlFor="email">Email</label>
                <input placeholder="Digite seu email" className="form__input" type="email" id="email" name="email" value={dados.email} onChange={atualizarCampos}  required/>
                {/* TODO: REDIRECIONAR PARA A RECUPERAÇÃO DE EMAIL */}
                <a className='link__ajuda' href="#">Esqueci meu email</a>

                <label className="form__label" htmlFor="senha">Senha</label>
                <input placeholder="Digite sua senha" className="form__input" type="password" id="senha" name="senha" value={dados.senha} onChange={atualizarCampos}  required/>
                {/* TODO: REDIRECIONAR PARA A RECUPERAÇÃO DE SENHA */}
                <a className='link__ajuda' href="#">Esqueci minha senha</a>

                {aviso && <p className="aviso">{aviso}</p>}

                <button type="submit" className="btn btn__submit">Confirmar e Fazer Login <ArrowRight size={20} /></button>
            </form>
    )
}

