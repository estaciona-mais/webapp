import { useState } from 'react';
import SelecionarPlano from "../../../components/SelecionarPlano/SelecionarPlano"
import { ChevronDown, ArrowRight } from 'lucide-react';

const dadosEsperados = {nome: '', email: '', senha: '', confirmarSenha:'', plano:''}

export default function CadastroUsuario({dadosIniciais, onConcluir}) {

    const [dados, setDados] = useState(dadosIniciais || dadosEsperados)
    const [aviso, setAviso] = useState('')

    function atualizarCampos(e) {
        setDados(d => ({...d, [e.target.name]: e.target.value}))
    }

    function validarSenha(dados){
        if(dados.senha !== dados.confirmarSenha){
            return "As senhas não conferem"
        }
        return null
    }

    function enviar(e) {
        e.preventDefault()
        const erro = validarSenha(dados)
        if(erro){
            setAviso(erro)
        } else {
            setAviso('')
            onConcluir(dados)
        }
        
    }

    return(
            <form onSubmit={enviar}>
                <label className="form__label" htmlFor="nome">Nome Completo</label>
                <input placeholder="Digite seu nome completo" className="form__input" type="text" id="nome" name="nome" value={dados.nome} onChange={atualizarCampos} required/>

                <label className="form__label" htmlFor="email">Email</label>
                <input placeholder="Digite seu email" className="form__input" type="email" id="email" name="email" value={dados.email} onChange={atualizarCampos}  required/>

                <label className="form__label" htmlFor="senha">Senha</label>
                <input placeholder="Digite sua senha" className="form__input" type="password" id="senha" name="senha" value={dados.senha} onChange={atualizarCampos}  required/>

                <label className="form__label" htmlFor="confirmarSenha">Confirmar Senha</label>
                <input placeholder="Confirme sua senha" className="form__input" type="password" id="confirmarSenha" name="confirmarSenha" value={dados.confirmarSenha} onChange={atualizarCampos}  required/>
                
                <label className="form__label">Selecione seu Plano</label>
                <div className="form__selector selector">
                    <SelecionarPlano value={dados.plano} onChange={atualizarCampos} />
                    <ChevronDown className="selector__seta" size={22}/>
                </div>

                {aviso && <p className="aviso">{aviso}</p>}

                <button type="submit" className="btn btn__submit">Confirmar e Continuar <ArrowRight size={20} /></button>
            </form>
    )
}

