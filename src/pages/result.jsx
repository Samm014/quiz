import { useRouter } from 'next/router';
import Display from '../components/Display'
import Button from '../components/Button'
import styles from '../styles/Result.module.css'

export default function Result(){
    const router = useRouter();

    const total = +router.query.latot;
    const certas = +router.query.satrec;
    const percentual = Math.round((certas / total) * 100)

    function loadColor(certas = 0){
        if(certas >= 15){
            return '#69f0ae';
        }
        
        if(certas >= 8){
            return '#ffee58'
        }
        
        if(certas >= 0){
            return '#DE6A33'
        }
    }

    return(
        <div className={styles.result}>
            <h1>Resultado Final</h1>
            <div className={styles.container}>
                <Display text="Perguntas" value={total}/>
                <Display text="Certas" value={certas}
                BackColor='#9CD2A4'/>
                <Display text="Percentual" value={`${percentual}%`}
                BackColor={loadColor(certas)}/>
            </div>

            <Button href="/" text={certas >= 15 ? "Jogar Novamente" : "Tentar Novamente"} />
        </div>
    )
}