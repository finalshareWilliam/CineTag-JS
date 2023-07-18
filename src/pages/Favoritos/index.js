import Banner from 'components/Banner';
import styles from './Favoritos.module.css';
import Titulo from 'components/Titulo';
import Card from 'components/Card';

function Favoritos(){
    return(
        <>
        <Banner imagem='favoritos'/>
        <Titulo>
            <h1>Meus Favoritos</h1>
        </Titulo>
        <section className={styles.container}>
            <Card id='1' titulo='Ferrari' capa='https://neofeed.com.br/wp-content/uploads/2021/04/ferrari-1.jpg' />
        </section>
        </>
    )
}
export default Favoritos;