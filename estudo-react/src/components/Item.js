import PropTypes from 'prop-types'

function Item({marca, lançamento}){
    return(
        <>
            <li>{marca} - {lançamento}</li>
        </>
    )
}
Item.prototype = {
    marca: PropTypes.string
}

export default Item