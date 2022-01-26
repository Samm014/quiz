import ModelAnswer from "../model/answer";
import styles from '../styles/Answer.module.css';

interface AnswerProps{
    value: ModelAnswer,
    indice: number,
    letter: string,
    backgroundColorLetter: string,
    proviededAnswer: (indice:number) => void
}

export default function Answer(props: AnswerProps){

    const answer = props.value;
    const respostaRevelada = answer.revelada ? styles.respostaRevelada : ''
    return(
        <div className={styles.answer} onClick={()=>props.proviededAnswer(props.indice)}>
            <div className={`${respostaRevelada} ${styles.content}`}>
                    <div className={styles.frontCard}>
                        <div className={styles.letter} style={{backgroundColor: props.backgroundColorLetter}}>
                            {props.letter}
                        </div>
                        <div className={styles.value}>
                            {answer.valor}
                        </div>
                    </div>

                    <div className={styles.backCard}>
                    {answer.certa?
                        <div className={styles.certa}>
                            <div>A resposta certa é...</div>
                            <div className={styles.text}>{answer.valor}</div>
                        </div>                   
                    :   <div className={styles.errada}>
                            <div>A resposta informada está errada...</div>
                            <div className={styles.text}>{answer.valor}</div>
                        </div>
                    }
                    </div>
            </div>
        </div>
    )
}