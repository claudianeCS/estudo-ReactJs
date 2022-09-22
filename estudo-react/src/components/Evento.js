function Evento({numero}){
    function meuEvento(){
        console.log(`Ativado com sucesso ${numero}`)
    }
    
    return(
        <div>
            <p>Clique aqui para disparar um evento</p>
            <button onClick={meuEvento}>Ativar!</button>
        </div>
    )

}

export default Evento