import styles from './Frase.module.css'

function Frase(){
    return(
        <div className={styles.fraseContainer}>
            <h3 >Outra frase</h3>
            <p className={styles.fraseContent}>Teste</p>
        </div>
    )
}

export default Frase