import {useState} from 'react'

function Condicional(){

    //state
    const [email, setEmail] = useState()
    const [userEmail, setUserEmail] = useState()

    function enviarEmail(e){
        e.preventDefault() //impede que a pagina de reload  quando recarrega a pagina.
        setUserEmail(email)
        console.log(userEmail)
    }

    function limparEmail(){
        setUserEmail('')    //ira gerar um valor false e não sera feita a condicional verdadeira
    }

    return(
        <div>
            <h2>Cadastre seu email</h2>
            <form>
                <input type="email" placeholder="Digite o seu email..." onChange={(e) => setEmail(e.target.value)}/>
                <button onClick={enviarEmail}>Enviar email</button>
                {userEmail && (
                    <div>
                        <p>O email do usuario é: {userEmail}</p>
                        <button onClick={limparEmail}>Limpar</button>
                    </div>
                )}
            </form>
        </div>
    )
}

export default Condicional