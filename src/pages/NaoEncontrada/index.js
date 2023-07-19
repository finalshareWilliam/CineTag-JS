import styles from './NaoEncontrada.module.css';

function NaoEncontrada (){
    return (
        <section className={styles.container}>
            <img src="https://img.freepik.com/vetores-gratis/ups-erro-404-com-ilustracao-de-conceito-de-robo-quebrado_114360-5529.jpg" alt='Pagina não encontrada!'/>
            <p>O conteúdo que você procura não foi encontrado!</p>
        </section>
    )
}

export default NaoEncontrada;