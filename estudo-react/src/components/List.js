import Item from "./Item"

function List(){
    return(
        <>
            <h1>Minha lista</h1>
            <ul>
                <Item marca="Fiat"  lançamento={1995}/>
                <Item marca="Ferrari" lançamento={2010}/>
            </ul>
        </>
    )
}

export default List